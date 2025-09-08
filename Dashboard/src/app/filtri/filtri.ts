import { Component, OnInit } from '@angular/core';
import { ProdottiModel } from '../Model/ProdottiModel';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MinPrezzo } from '../Direttive/min-prezzo';

@Component({
  selector: 'app-filter',
  imports: [FormsModule, CommonModule, MinPrezzo],
  templateUrl: './filtri.html',
  styleUrl: './filtri.css',
})
export class Filtri implements OnInit {
  searchText: string = '';
  minPrice?: number;
  maxPrice?: number;

  coopProducts: ProdottiModel[] = [];
  esselungaProducts: ProdottiModel[] = [];
  carrefourProducts: ProdottiModel[] = [];

  filteredCoopProducts: ProdottiModel[] = [];
  filteredEsselungaProducts: ProdottiModel[] = [];
  filteredCarrefourProducts: ProdottiModel[] = [];

  minPriceGlobal: number | null = null;
  minCoopPrice: number | null = null;
  minEsselungaPrice: number | null = null;
  minCarrefourPrice: number | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.initCoopProducts();
    this.initEsselungaProducts();
    this.initCarrefourProducts();
  }

  initCoopProducts() {
    this.http.get<any>('/prodotti.json').subscribe((data) => {
      this.coopProducts = data.coop;
      const prices = this.coopProducts
        .map((p) => p.price)
        .filter((p) => p != null);
      this.minCoopPrice = Math.min(...data.coop.map((p: any) => p.price));
      this.filteredCoopProducts = this.coopProducts;
    });
  }

  initEsselungaProducts() {
    this.http.get<any>('/prodotti.json').subscribe((data) => {
      this.esselungaProducts = data.esselunga;
      const prices = this.esselungaProducts
        .map((p) => p.price)
        .filter((p) => p != null);
      this.minCoopPrice = Math.min(...data.esselunga.map((p: any) => p.price));
      this.filteredEsselungaProducts = this.esselungaProducts;
    });
  }

  initCarrefourProducts() {
    this.http.get<any>('/prodotti.json').subscribe((data) => {
      this.carrefourProducts = data.carrefour;
      const prices = this.carrefourProducts
        .map((p) => p.price)
        .filter((p) => p != null);
      this.minCoopPrice = Math.min(...data.carrefour.map((p: any) => p.price));
      this.filteredCarrefourProducts = this.carrefourProducts;
    });
  }

  filterCoopProducts() {
    if (!Array.isArray(this.filteredCoopProducts)) return;

    const name = this.searchText.trim().toLowerCase();
    this.filteredCoopProducts = this.coopProducts.filter((p) => {
      const matchesName = !name || p.name.toLowerCase().includes(name);
      const matchesMin = this.minPrice == null || p.price >= this.minPrice;
      const matchesMax = this.maxPrice == null || p.price <= this.maxPrice;
      return matchesName && matchesMin && matchesMax;
    });
  }

  filterEsselungaProducts() {
    if (!Array.isArray(this.filteredEsselungaProducts)) return;

    const name = this.searchText.trim().toLowerCase();
    this.filteredEsselungaProducts = this.esselungaProducts.filter((p) => {
      const matchesName = !name || p.name.toLowerCase().includes(name);
      const matchesMin = this.minPrice == null || p.price >= this.minPrice;
      const matchesMax = this.maxPrice == null || p.price <= this.maxPrice;
      return matchesName && matchesMin && matchesMax;
    });
  }

  filterCarrefourProducts() {
    if (!Array.isArray(this.filteredCarrefourProducts)) return;

    const name = this.searchText.trim().toLowerCase();
    this.filteredCarrefourProducts = this.carrefourProducts.filter((p) => {
      const matchesName = !name || p.name.toLowerCase().includes(name);
      const matchesMin = this.minPrice == null || p.price >= this.minPrice;
      const matchesMax = this.maxPrice == null || p.price <= this.maxPrice;
      return matchesName && matchesMin && matchesMax;
    });
  }

  isAviable(product: ProdottiModel): string {
    if (product.available) {
      return 'Available';
    } else {
      return 'N/A';
    }
  }
}
