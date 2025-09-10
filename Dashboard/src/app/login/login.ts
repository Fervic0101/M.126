import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {
  private email: string = 'admin';
  private password: string = 'admin';

  inputEmail: string = '';
  inputPassword: string = '';

  constructor(private router: Router) {}

  onLogin() {
    if (
      this.inputEmail === this.email &&
      this.inputPassword === this.password
    ) {
      this.router.navigate(['gestione-utenti']);
    } else {
      alert('Credenziali errate!');
    }
  }
}
