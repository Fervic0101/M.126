import { Component, Input } from '@angular/core';
import { ProdottiModel } from '../Model/ProdottiModel';
import { CommonModule } from '@angular/common';
import { ElementiStile } from '../Direttive/elementi-stile';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-prodotti',
  imports: [CommonModule,ElementiStile],
  templateUrl: './prodotti.html',
  styleUrl: './prodotti.css'
})
export class Prodotti {
  @Input() supermarket: number = 0;
  Lista : Array<ProdottiModel> = [];
  Coop : Array<ProdottiModel> = [];;
  Esselunga : Array<ProdottiModel> = [];;
  Carrefour : Array<ProdottiModel> = [];;
  PrezzoPiccolo : Array<number> =[];;

  constructor(private http: HttpClient)
  {
      
  }


  ngOnInit()
  {
    this.http.get<any>('/prodotti.json').subscribe(data => {
       this.Coop = data.coop.map((p: ProdottiModel) => new ProdottiModel(p.name, p.price, p.image, p.description, p.available))
        this.Esselunga = data.esselunga.map((p: any) => new ProdottiModel(p.name, p.price, p.image, p.description, p.available))
        this.Carrefour = data.carrefour.map((p: any) => new ProdottiModel(p.name, p.price, p.image, p.description, p.available))
        for(let i=0;i<this.Coop.length;i++)
      {
        this.PrezzoPiccolo[i]=Math.min(this.Coop[i].price,this.Carrefour[i].price,this.Esselunga[i].price);
     
      }
      switch(this.supermarket)
    {
      case 0:
        console.log(this.Coop)
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
    });
    
    
        


    }
}
