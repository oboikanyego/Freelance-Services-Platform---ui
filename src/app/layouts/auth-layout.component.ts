import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Loading } from '../services/loading';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@Component({
  selector: 'auth-layout',
  standalone: true,
  imports: [RouterOutlet, CommonModule,
    MatProgressBarModule],
  template: `
  <router-outlet></router-outlet>`
})
export class AuthLayoutComponent {
  constructor(public loadingService: Loading) {}
}
