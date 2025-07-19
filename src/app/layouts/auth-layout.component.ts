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
  <mat-progress-bar
  *ngIf="loadingService.loading$ | async"
  mode="indeterminate"
  color="primary"
  style="position: fixed; top: 0; left: 0; width: 100%; z-index: 1000;"
></mat-progress-bar>
  <router-outlet></router-outlet>`
})
export class AuthLayoutComponent {
  constructor(public loadingService: Loading) {}
}
