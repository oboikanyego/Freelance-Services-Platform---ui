import { Component, OnInit } from '@angular/core';
import { Service } from '../../models/service.model';
import { ServiceService } from '../../services/service.service';
import { ServiceCard } from "../../components/service-card/service-card";
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-service-list',
  imports: [ServiceCard,CommonModule,MatProgressSpinnerModule,HttpClientModule],
  templateUrl: './service-list.html',
  styleUrl: './service-list.scss'
})
export class ServiceList {
  services: Service[] = [];
  loading = true;

  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    this.serviceService.getAllServices().subscribe({
      next: (data) => {
        this.services = data;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }
}
