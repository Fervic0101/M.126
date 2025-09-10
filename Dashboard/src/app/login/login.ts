import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  showAzienda = false;
  constructor(private router: Router, private auth: AuthService) {}

  erroreCredenziali = false;

  onLogin(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const userType = (form['userType'] as HTMLSelectElement).value;
    const username = (form['username'] as HTMLInputElement).value;
    const password = (form['password'] as HTMLInputElement).value;
    if (userType === 'operatore') {
      if (username === 'O104321' && password === 'Operatore') {
        this.erroreCredenziali = false;
        this.auth.login('operatore');
        this.router.navigate(['/supermercato']);
      } else {
        this.erroreCredenziali = true;
      }
    } else if (userType === 'cliente') {
      this.erroreCredenziali = false;
      this.auth.login('cliente');
      this.router.navigate(['/cliente']);
    }
  }
}
