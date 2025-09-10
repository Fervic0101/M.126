import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  username: string = '';
  password: string = '';
  role: string = 'cliente';

  constructor(private router: Router) {}

  onSubmit(): void {
    // validazione semplice
    if (!this.username || !this.password) {
      alert('Compila tutti i campi!');
      return;
    }

    if (this.username === 'prova' && this.password === '1234') {
      //utilizzate credenziali in questo modo per non dover creare e poi chiamare un Back end
      if (this.role === 'cliente') {
        this.router.navigate(['client-page']); // pagina cliente
      } else if (this.role === 'azienda') {
        this.router.navigate(['admin-page']); // pagina azienda
      }
    } else {
      alert('Username o password errate');
    }
  }
}
