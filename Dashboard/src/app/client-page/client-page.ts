import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-client-page',
  imports: [DecimalPipe],
  templateUrl: './client-page.html',
  styleUrl: './client-page.css',
})
export class ClientPage implements OnInit {
  username: string = 'Mario Rossi';

  prodottiAcquistati: { name: string; quantity: number; price: number }[] = [];
  supermercatiPiuUsati: { name: string; count: number }[] = [];
  spesaMedia: number = 0;

  ngOnInit() {
    //dati finti
    this.prodottiAcquistati = [
      { name: 'Pasta', quantity: 3, price: 1.5 },
      { name: 'Latte', quantity: 2, price: 0.9 },
      { name: 'Olio', quantity: 1, price: 4.2 },
      { name: 'Mozzarella', quantity: 2, price: 2.1 },
    ];

    this.supermercatiPiuUsati = [
      { name: 'COOP', count: 5 },
      { name: 'Esselunga', count: 3 },
      { name: 'Carrefour', count: 2 },
    ];

    const totaleSpesa = this.prodottiAcquistati.reduce(
      (acc, p) => acc + p.quantity * p.price,
      0
    );
    this.spesaMedia = parseFloat(
      (totaleSpesa / this.prodottiAcquistati.length).toFixed(2)
    );
  }
}
