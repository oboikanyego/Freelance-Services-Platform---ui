import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { trigger, transition, style, animate } from '@angular/animations';
import { Loading } from './services/loading';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LoadingOverlay } from "./components/loading-overlay/loading-overlay";


@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatProgressBarModule,
    LoadingOverlay
],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  animations: [
    trigger('fadeSlideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(40px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class App {
  constructor(public loadingService: Loading) {}
  protected readonly title = signal('client');
  currentYear: any = new Date().getFullYear();;
}
