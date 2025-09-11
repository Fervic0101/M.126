import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  datiUtente: any;

  accesso() {
    const utenteSalvato = localStorage.getItem('utenteRegistrato');
    this.datiUtente = utenteSalvato ? JSON.parse(utenteSalvato) : null;
    console.log('Login effettuato con successo:', this.datiUtente);
  }

}
