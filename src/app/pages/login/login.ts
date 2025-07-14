import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButton,
    MatCheckboxModule,MatButtonModule,RouterModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  form: FormGroup;
  loading = false;

  constructor(
    public fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  submit() {
    if (this.form.invalid) return;

    this.loading = true;
    this.auth.login(this.form.value).subscribe({
      next: () => this.router.navigate(['/']),
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }
}
