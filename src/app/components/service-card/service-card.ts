import { Component, Input } from '@angular/core';
import { Service } from '../../models/service.model';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon'; // if you use any icons
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-service-card',
  imports: [
    MatCardModule,
    MatIconModule, // optional, for icons
    CommonModule,
  ],
  templateUrl: './service-card.html',
  styleUrl: './service-card.scss'
})
export class ServiceCard {
  @Input() service!: Service;
}
