  // ...existing code...
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProdottiModel } from '../Model/ProdottiModel';

@Component({
  selector: 'app-prodotti',
  imports: [CommonModule, FormsModule],
  templateUrl: './prodotti.html',
  styleUrl: './prodotti.css'
})
export class Prodotti {
  filtroNome: string = '';
  prezzoMin: number = 0;
  prezzoMax: number = 0;

  prodottiFiltrati() {
    return this.Lista.filter((p: any) => {
      const nomeMatch = !this.filtroNome || p.nome.toLowerCase().includes(this.filtroNome.toLowerCase());
      const prezzoMatch = (!this.prezzoMin || p.price >= this.prezzoMin) && (!this.prezzoMax || p.price <= this.prezzoMax);
      return nomeMatch && prezzoMatch;
    });
  }
  @Input() supermarket: number = 0;
  Lista : Array<ProdottiModel> = [];
  Coop : Array<ProdottiModel> = [];;
  Esselunga : Array<ProdottiModel> = [];;
  Carrefour : Array<ProdottiModel> = [];;
  minPrice: number = 0;
  constructor()
  {
    this.Coop.push(new ProdottiModel('Puma',75,'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Puma_AG.svg/2560px-Puma_AG.svg.png','Scarpe da ginnastica di alta qualità',true));
    this.Esselunga.push(new ProdottiModel('Nike',100,'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2c5f1f3e-1d2e-4f6a-8b1e-3b4c6f4d5e0c/nike-just-do-it.jpg','Scarpe da ginnastica di alta qualità',true));
    this.Carrefour.push( new ProdottiModel('Adidas',50,'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png','Scarpe da ginnastica di alta qualità',false));
  }
  ngOnInit(){
    // Calcola il prezzo minimo tra tutti i prodotti di tutti i supermercati
    const allProducts = [...this.Coop, ...this.Esselunga, ...this.Carrefour];
    this.minPrice = Math.min(...allProducts.map(p => p.price));
    // Aggiungi una proprietà evidenziaMinimo ai prodotti con prezzo minimo
    allProducts.forEach(p => {
      (p as any).evidenziaMinimo = p.price === this.minPrice;
    });
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
