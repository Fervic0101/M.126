import { Component, Input } from '@angular/core';
import { ProdottiModel } from '../Model/ProdottiModel';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-prodotti',
  imports: [MatCardModule, MatButtonModule, NgForOf],
  templateUrl: './prodotti.html',
  styleUrl: './prodotti.css'
})
export class Prodotti {
  @Input() supermarket: number = 0;
  Lista : Array<ProdottiModel> = [];
  Coop : Array<ProdottiModel> = [];
  Esselunga : Array<ProdottiModel> = [];
  Carrefour : Array<ProdottiModel> = [];
  constructor()
  {
  // Coop
  this.Coop.push(new ProdottiModel(
    'Puma',
    75,
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Puma_AG.svg/2560px-Puma_AG.svg.png',
    'Scarpe da ginnastica di alta qualità',
    true
  ));
  this.Coop.push(new ProdottiModel(
    'Converse',
    60,
    'https://upload.wikimedia.org/wikipedia/commons/3/35/Converse_logo.svg',
    'Scarpe sportive casual',
    true
  ));
    this.Esselunga.push(new ProdottiModel('Nike',100,'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2c5f1f3e-1d2e-4f6a-8b1e-3b4c6f4d5e0c/nike-just-do-it.jpg','Scarpe da ginnastica di alta qualità',true));
    this.Esselunga.push(new ProdottiModel('Reebok',80,'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Reebok_2019_logo.svg/2560px-Reebok_2019_logo.svg.png','Scarpe da ginnastica di alta qualità',true));

    this.Carrefour.push( new ProdottiModel('Adidas',50,'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png','Scarpe da ginnastica di alta qualità',false));
    this.Carrefour.push( new ProdottiModel('Fila',40,'https://upload.wikimedia.org/wikipedia/commons/5/5f/Fila_logo.svg','Scarpe da ginnastica di alta qualità',true));

  }
  ngOnInit(){
    switch(this.supermarket)
    {
      case 0:
        this.Lista = this.Coop;
        break;
      case 1:
        this.Lista = this.Esselunga;
        break;
      case 2:
        this.Lista = this.Carrefour;
        break;
      default:
        this.Lista = this.Coop;
        break;
    }
    }
}
