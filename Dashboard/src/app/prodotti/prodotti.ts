import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
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
export class Prodotti implements OnInit, OnChanges {
  @Input() supermarket: number = 0;
  @Input() searchTerm: string = '';
  @Input() minPrice: number = 0;
  @Input() maxPrice: number = 100;
  @Input() onlyAvailable: boolean = false;
  
  Lista: Array<ProdottiModel> = [];
  ListaFiltrata: Array<ProdottiModel> = [];
  cheapestProducts: Set<string> = new Set();
  loading: boolean = true;
  error: string = '';
  
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.caricaProdotti();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['supermarket'] && !changes['supermarket'].firstChange) {
      this.caricaProdotti();
    } else {
      this.filtraLista();
    }
  }

  caricaProdotti() {
    this.loading = true;
    this.error = '';
    
    this.http.get<any>('/prodotti.json').subscribe({
      next: (data) => {
        try {
          const marketData = {
            0: data.coop || [],
            1: data.esselunga || [],
            2: data.carrefour || []
          } as { [key: number]: any[] };
          
          this.Lista = marketData[this.supermarket].map((p: any) =>
            new ProdottiModel(p.name, p.price, p.image, p.description, p.available)
          );
          
          this.calcolaProdottiPiuEconomici(data);
          this.filtraLista();
        } catch (e) {
          this.error = 'Errore nel formato dei dati';
          console.error('Errore nel processing dei dati:', e);
        }
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Impossibile caricare i prodotti';
        console.error('Errore nel caricamento dei dati:', err);
        this.loading = false;
      }
    });
  }

  // Il resto del codice rimane invariato
  calcolaProdottiPiuEconomici(data: any) {
    this.cheapestProducts.clear();
    
    const allProducts = [...data.coop, ...data.esselunga, ...data.carrefour];
    const productMinPrices: { [key: string]: number } = {};
    
    allProducts.forEach((product: any) => {
      if (!product.available) return;
      
      if (!productMinPrices[product.name] || product.price < productMinPrices[product.name]) {
        productMinPrices[product.name] = product.price;
      }
    });
    
    this.Lista.forEach(product => {
      if (product.available && productMinPrices[product.name] === product.price) {
        this.cheapestProducts.add(product.name);
      }
    });
  }

  filtraLista() {
    if (this.Lista.length === 0) return;
    
    this.ListaFiltrata = this.Lista.filter(p => {
      const matchNome = !this.searchTerm.trim() || 
        p.name.toLowerCase().includes(this.searchTerm.toLowerCase().trim());
      
      const matchPrezzo = (p.price >= this.minPrice) && 
                         (p.price <= this.maxPrice);
      
      const matchDisponibilita = !this.onlyAvailable || p.available;
      
      return matchNome && matchPrezzo && matchDisponibilita;
    });
  }

  resetFiltri() {
    this.searchTerm = '';
    this.minPrice = 0;
    this.maxPrice = 100;
    this.onlyAvailable = false;
    this.filtraLista();
  }

  isCheapest(productName: string): boolean {
    return this.cheapestProducts.has(productName);
  }
}