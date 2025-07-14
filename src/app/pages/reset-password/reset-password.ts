import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-reset-password',
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule],
  templateUrl: './reset-password.html',
  styleUrl: './reset-password.scss'
})
export class ResetPassword {
password = '';
message = '';
token = '';

constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {
  this.token = this.route.snapshot.paramMap.get('token')!;
}

submit() {
  this.http.post(`${environment.apiUrl}/api/auth/reset-password/${this.token}`, { password: this.password }).subscribe({
    next: (res:any) => {
      this.message = res.message;
      setTimeout(() => this.router.navigate(['/login']), 2000);
    },
    error: (err) => this.message = err.error.message
  });
}
}
