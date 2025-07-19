import { Component } from '@angular/core';
import { Loading } from '../../services/loading';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading-overlay',
  imports: [MatProgressSpinnerModule,CommonModule],
  templateUrl: './loading-overlay.html',
  styleUrl: './loading-overlay.scss'
})
export class LoadingOverlay {
  text = 'Please wait...'.split('');
  constructor(public loadingService: Loading) {}

}
