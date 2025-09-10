import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-supermercato',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './supermercato.html',
  styleUrls: ['./supermercato.css']
})
export class Supermercato {
  prodotti = [
    { nome: 'Puma', prezzo: 75, offerta: 70, descrizione: 'Scarpe da ginnastica di alta qualità' },
    { nome: 'Nike', prezzo: 100, offerta: 95, descrizione: 'Scarpe da ginnastica di alta qualità' },
    { nome: 'Adidas', prezzo: 50, offerta: 50, descrizione: 'Scarpe da ginnastica di alta qualità' }
  ];
}
