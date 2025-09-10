import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;
  errors = {
    email: '',
    password: ''
  };

  onSubmit() {
    // Reset errors
    this.errors = { email: '', password: '' };
    
    // Simple validation
    let isValid = true;
    
    if (!this.email) {
      this.errors.email = 'Email is required';
      isValid = false;
    } else if (!this.isValidEmail(this.email)) {
      this.errors.email = 'Please enter a valid email';
      isValid = false;
    }
    
    if (!this.password) {
      this.errors.password = 'Password is required';
      isValid = false;
    } else if (this.password.length < 6) {
      this.errors.password = 'Password must be at least 6 characters';
      isValid = false;
    }
    
    if (isValid) {
      console.log('Login submitted:', {
        email: this.email,
        password: this.password,
        rememberMe: this.rememberMe
      });
      // Here you would typically call your authentication service
    }
  }
  
  private isValidEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }
}