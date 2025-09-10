import { routes } from './../app.routes';
import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [MatButton, CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(private router: Router) {}

  RegisterNavigate() {
    this.router.navigate(['/accedi']);
  }
  onSubmit(form: NgForm) {
    console.log('Form submitted:', form.value);
    const email = form.value.email;
    if (!email.includes('@')) {
      console.error('invalid email address');
    }
    alert('Utente loggato: ' + form.value);
  }
}
