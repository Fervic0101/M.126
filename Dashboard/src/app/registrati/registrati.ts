import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registrati',
  imports: [FormsModule, CommonModule],
  templateUrl: './registrati.html',
  styleUrls: ['./registrati.css'],
})
export class Registrati {
  email: string = '';
  password: string = '';
  tipoUtente: string = '';

  constructor(private router: Router) {}

  salvaDati() {
  
    const userData = {
      email: this.email,
      password: this.password,
      tipoUtente: this.tipoUtente
    };
    
    if (this.email === localStorage.getItem('utenteRegistrato')) {
      alert('Email già registrata. Per favore, usa un\'altra email.');
      return;
    }
    else{
    localStorage.setItem('utenteRegistrato', JSON.stringify(userData));
    
    console.log('Dati salvati:', userData);
    alert('Registrazione completata con successo!');
 
    this.indirizzaUtente();
    }
  }

  selezionaTipo(event: any) {
    this.tipoUtente = event.target.value;
  }

  private indirizzaUtente() {
    switch(this.tipoUtente) {
      case 'cliente':
        this.router.navigate(['/login']);
        break;
      case 'fornitore':
        this.router.navigate(['/loginFornitore']);
        break;
      default:
        this.router.navigate(['/login']);
        break;
    }
  }
}