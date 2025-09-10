import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

//json-server --watch .\src\app\prodotti.json --port 3000 comando per avviare il server

@Component({
  selector: 'app-gestione-utenti',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatRadioModule,
    MatDividerModule,
    MatButtonModule,
  ],
  templateUrl: './gestione-utenti.html',
  styleUrl: './gestione-utenti.css',
})
export class GestioneUtenti {
  constructor(private http: HttpClient) {}

  foods = [
    { value: 'coop', viewValue: 'coop' },
    { value: 'esselunga', viewValue: 'esselunga' },
    { value: 'carrefour', viewValue: 'carrefour' },
  ];

  selectedSupermarket = '';
  productName = '';
  productPrice = '';
  productImage = '';
  productDescription = '';
  disponibilita = '';

  onSubmit() {
    if (
      !this.selectedSupermarket ||
      !this.productName ||
      !this.productPrice ||
      !this.disponibilita
    ) {
      alert('Compila tutti i campi obbligatori');
      return;
    }

    const newProduct = {
      name: this.productName,
      price: parseFloat(this.productPrice.replace(',', '.')),
      image: this.productImage || 'placeholder.jpg',
      description: this.productDescription || 'Nessuna descrizione',
      available: this.disponibilita === 'si',
    };

    this.http
      .post(`http://localhost:3000/${this.selectedSupermarket}`, newProduct) //creo una post con l'endpoint del supermercato
      .subscribe({
        next: () => {
          alert(
            `Prodotto salvato correttamente in ${this.selectedSupermarket}.json!`
          );
          this.resetForm();
        },
        error: (err) => {
          console.error('Errore nel salvataggio:', err);
          alert('Errore durante il salvataggio del prodotto');
        },
      });
  }

  resetForm() {
    //pulisco i campi del form all'invio con successo
    this.selectedSupermarket = '';
    this.productName = '';
    this.productPrice = '';
    this.productImage = '';
    this.productDescription = '';
    this.disponibilita = '';
  }
}
