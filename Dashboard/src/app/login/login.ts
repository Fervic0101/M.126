import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  showAzienda = false;
  constructor(private router: Router) {}

  onLogin(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
  const userType = (form['userType'] as HTMLSelectElement).value;
    if (userType === 'operatore') {
      this.router.navigate(['/supermercato']);
    } else if (userType === 'cliente') {
      this.router.navigate(['/cliente']);
    }
  }
}
