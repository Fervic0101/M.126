import { Component, } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { ProdottiModel } from '../Model/ProdottiModel';
import { HighlightMinDirective } from '../Direttive/highlight-min-directive';


@Component({
  selector: 'app-prodotti',
  standalone: true,
  templateUrl: './prodotti.html',
  styleUrls: ['./prodotti.css'], 
  imports: [CommonModule, HighlightMinDirective]  // senza questo, non funziona
})

export class Prodotti {

  Lista: Array<ProdottiModel> = [];

  constructor() {
    this.Lista.push(new ProdottiModel(
      'Ombrello',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Umbrella_icon.svg/2560px-Umbrella_icon.svg.png',
      'Ombrello resistente alla pioggia',
      true,
      15, 18, 12
    ));

    this.Lista.push(new ProdottiModel(
      'Carote biologiche',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Carrot_icon.svg/2560px-Carrot_icon.svg.png',
      'Carote fresche e croccanti',
      true,
      3, 2.8, 3.5
    ));

    this.Lista.push(new ProdottiModel(
      'Shampoo capelli',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Shampoo_bottle_icon.svg/2560px-Shampoo_bottle_icon.svg.png',
      'Shampoo delicato per tutti i tipi di capelli',
      true,
      7, 6.5, 7.2
    ));
  }

  getMinPrice(p: ProdottiModel): number {
    return Math.min(p.coopPrice, p.esselungaPrice, p.carrefourPrice);
  }
}
