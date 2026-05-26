import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  public form: any;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  // ✅ check if sessionStorage is available (browser only)
  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof sessionStorage !== 'undefined';
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { username, password } = this.form.value;
    
    if (username === 'saclon' && password === 'saclon#2026') {
      console.log('Login successful ✅');

      if (this.isBrowser()) {
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('password', password);
      }

      this.router.navigate(['/insurance']); // redirect to insurance page
    } else {
      alert('❌ Invalid username or password');
    }
  }
}
