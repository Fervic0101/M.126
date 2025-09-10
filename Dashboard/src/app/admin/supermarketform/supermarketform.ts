import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule, TitleCasePipe } from "@angular/common";

@Component({
  selector: 'app-supermarket-form',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatButtonModule, MatCardModule, TitleCasePipe, CommonModule],
  templateUrl: './supermarketform.html',
  styleUrls: ['./supermarketform.css']
})

export class SupermarketForm {
  supermarket: string = '';
  productName: string = '';
  productDescription: string = '';
  productPrice: number | null = null;
  offertaPrezzo: number = 0;

  prodottiInseriti: { name: string; description: string, prezzo: number, offertaPrezzo?: number, offerta: number }[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.supermarket = this.route.snapshot.paramMap.get('supermarket') || '';
  }

  addProduct() {
  if (!this.productName || !this.productPrice) return;

  this.prodottiInseriti.push({
    name: this.productName,
    description: this.productDescription,
    prezzo: this.productPrice,
    offerta: 0
  });

  this.productName = '';
  this.productDescription = '';
  this.productPrice = null;
  alert('Prodotto aggiunto!');
  }

  addOffer(index: number, newPrice: number) {
  if (newPrice >= this.prodottiInseriti[index].prezzo) {
    alert('Il prezzo in offerta deve essere inferiore al prezzo originale!');
    return;
  }
  this.prodottiInseriti[index].offerta = newPrice;
  alert(`Offerta aggiunta: ${newPrice}€`);
  }
  removeProduct(index: number) {
  this.prodottiInseriti.splice(index, 1);
  }


}
