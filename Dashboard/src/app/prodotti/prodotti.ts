import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ProdottiModel } from '../Model/ProdottiModel';
import { NgFor } from '@angular/common';


import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CardDir } from '../Direttive/card-dir';

@Component({
  selector: 'app-prodotti',
  imports: [NgFor, MatCardModule, MatButtonModule, CardDir],
  templateUrl: './prodotti.html',
  styleUrl: './prodotti.css'
})
export class Prodotti {
  @Input() supermarket: number = 0;
  Lista : Array<ProdottiModel> = [];
  Coop : Array<ProdottiModel> = [];;
  Esselunga : Array<ProdottiModel> = [];;
  Carrefour : Array<ProdottiModel> = [];;
  constructor()
  {
    this.Coop.push(new ProdottiModel('Patate Hermosa',2.99, false, "https://share.google/images/dDCV09WZXpb3EvGBy","",true));
    this.Esselunga.push(new ProdottiModel('Patate Lacerbo',1.50, true,"https://share.google/images/dDCV09WZXpb3EvGBy","",true));
    this.Carrefour.push( new ProdottiModel('Patate Riccardo',1.99, false, "https://share.google/images/dDCV09WZXpb3EvGBy","",true));

    this.Esselunga.push(new ProdottiModel('Mozzarella Ciro dop',4.99, false,"https://share.google/images/ZOA5MLFMt5zweYWRA", "",true));
    this.Carrefour.push( new ProdottiModel('Mozzarella Splendida',2.39, true, "https://share.google/images/41lhOpWdigBKGnPsl","",false));

     this.Coop.push(new ProdottiModel('Taralli pugliesi fatti in loco',8.99, false, 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Puma_AG.svg/2560px-Puma_AG.svg.png','Scarpe da ginnastica di alta qualità',true));
    this.Esselunga.push(new ProdottiModel('Taralli pugliesi',2.99, false, "https://share.google/images/dDCV09WZXpb3EvGBy","",true));
    this.Carrefour.push( new ProdottiModel('Taralli Pam',1.39, true,"https://share.google/images/dDCV09WZXpb3EvGBy","",true));

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
