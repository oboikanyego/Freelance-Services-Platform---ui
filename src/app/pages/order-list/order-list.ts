import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { AuthService } from '../../services/auth.service';
import { Order } from '../../models/order.model';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-order-list',
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  templateUrl: './order-list.html',
  styleUrl: './order-list.scss'
})
export class OrderList implements OnInit {
  orders: Order[] = [];
  filteredOrders: Order[] = [];
  loading = true;
  userId = '';

  // For filters/sorting UI
  statuses = ['pending', 'in progress', 'delivered', 'completed'];
  selectedStatus = '';
  sortOrder: 'newest' | 'oldest' = 'newest';

  constructor(
    private orderService: OrderService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const user = this.authService.getUser();
    if (!user) return;

    this.userId = user._id;
    this.loadOrders();
  }

  loadOrders() {
    this.orderService.getUserOrders(this.userId).subscribe({
      next: (orders) => {
        this.orders = orders;
        this.applyFilterSort();
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  applyFilterSort() {
    this.filteredOrders = this.orders.filter(order =>
      this.selectedStatus ? order.status === this.selectedStatus : true
    );

    this.filteredOrders.sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return this.sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });
  }

  onStatusChange(status: string) {
    this.selectedStatus = status;
    this.applyFilterSort();
  }

  onSortChange(order: 'newest' | 'oldest') {
    this.sortOrder = order;
    this.applyFilterSort();
  }

  updateStatus(orderId: string, status: string) {
    this.orderService.updateOrderStatus(orderId, status).subscribe({
      next: () => this.loadOrders(),
      error: (err) => console.error(err)
    });
  }
}
