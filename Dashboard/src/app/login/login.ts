import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  indirizzoEmail: string = '';
  credenziale: string = '';
  ricordami: boolean = false;
  errori = {
    email: '',
    password: ''
  };

  inviaForm() {
    // Reset errori
    this.errori = { email: '', password: '' };
    
    // Validazione semplice
    let valido = true;
    
    if (!this.indirizzoEmail) {
      this.errori.email = 'L\'email è obbligatoria';
      valido = false;
    } else if (!this.emailValida(this.indirizzoEmail)) {
      this.errori.email = 'Inserisci un\'email valida';
      valido = false;
    }
    
    if (!this.credenziale) {
      this.errori.password = 'La password è obbligatoria';
      valido = false;
    } else if (this.credenziale.length < 6) {
      this.errori.password = 'La password deve essere di almeno 6 caratteri';
      valido = false;
    }
    
    if (valido) {
      console.log('Accesso effettuato:', {
        email: this.indirizzoEmail,
        password: this.credenziale,
        ricordami: this.ricordami
      });
      // Qui normalmente chiameresti il servizio di autenticazione
    }
  }
  
  private emailValida(email: string): boolean {
    const patternEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return patternEmail.test(email);
  }
}