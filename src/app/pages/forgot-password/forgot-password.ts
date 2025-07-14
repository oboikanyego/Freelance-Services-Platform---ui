import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-forgot-password',
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.scss'
})
export class ForgotPassword {
  email = '';
  link = '';
  message = '';

  constructor(private http: HttpClient) {}

  submit() {
    this.http.post<any>('/api/auth/forgot-password', { email: this.email }).subscribe({
      next: (res) => {
        this.message = res.message;
        this.link = res.link; // For testing — show reset link
      },
      error: (err) => this.message = err.error.message
    });
  }
}
