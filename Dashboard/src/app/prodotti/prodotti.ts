
import { Component, Input } from '@angular/core';
import { ProdottiModel } from '../Model/ProdottiModel';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prodotti',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './prodotti.html',
  styleUrl: './prodotti.css'
})
export class Prodotti {
  @Input() supermarket: number = 0;
  Lista: Array<ProdottiModel> = [];
  ListaFiltrata: Array<ProdottiModel> = [];
  filtroNome: string = '';
  prezzoMin: number = 1;
  prezzoMax: number = 10;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('/prodotti.json').subscribe(data => {
      console.log(data);
      switch (this.supermarket) {
        case 0:
          this.Lista = data.coop.map((p: any) =>
            new ProdottiModel(p.name, p.price, p.image, p.description, p.available)
          );
          break;
        case 1:
          this.Lista = data.esselunga.map((p: any) =>
            new ProdottiModel(p.name, p.price, p.image, p.description, p.available)
          );
          break;
        case 2:
          this.Lista = data.carrefour.map((p: any) =>
            new ProdottiModel(p.name, p.price, p.image, p.description, p.available)
          );
          break;
      }
     
      this.ListaFiltrata = [...this.Lista];
    });
  }

  filtraLista() {
    if (this.Lista.length === 0) return;
    
    this.ListaFiltrata = this.Lista.filter(p => {
      // Name filter - if filtroNome is empty, show all products
      const matchNome = !this.filtroNome.trim() || 
        p.name.toLowerCase().includes(this.filtroNome.toLowerCase().trim());
      
      // Price filter
      const matchPrezzo = (isNaN(this.prezzoMin) || p.price >= this.prezzoMin) && 
                         (isNaN(this.prezzoMax) || p.price <= this.prezzoMax);
      
      return matchNome && matchPrezzo;
    });
  }

  resetFiltri() {
    this.filtroNome = '';
    this.prezzoMin = 0;
    this.prezzoMax = 1000;
    this.ListaFiltrata = [...this.Lista];
  }
}
