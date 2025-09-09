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
  searchText = '';
  minPrice?: number;
  maxPrice?: number;

  coopProducts: ProdottiModel[] = [];
  esselungaProducts: ProdottiModel[] = [];
  carrefourProducts: ProdottiModel[] = [];

  filteredCoopProducts: ProdottiModel[] = [];
  filteredEsselungaProducts: ProdottiModel[] = [];
  filteredCarrefourProducts: ProdottiModel[] = [];

  minPriceMap: { [productName: string]: number } = {};

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('/prodotti.json').subscribe((data) => {
      this.coopProducts = data.coop;
      this.esselungaProducts = data.esselunga;
      this.carrefourProducts = data.carrefour;

      this.applyFilters();
    });
  }

  applyFilters() {
    const name = this.searchText.trim().toLowerCase();
    const min = this.minPrice ?? -Infinity;
    const max = this.maxPrice ?? Infinity;

    this.filteredCoopProducts = this.coopProducts.filter(
      (p) =>
        (!name || p.name.toLowerCase().includes(name)) &&
        p.price >= min &&
        p.price <= max
    );
    this.filteredEsselungaProducts = this.esselungaProducts.filter(
      (p) =>
        (!name || p.name.toLowerCase().includes(name)) &&
        p.price >= min &&
        p.price <= max
    );
    this.filteredCarrefourProducts = this.carrefourProducts.filter(
      (p) =>
        (!name || p.name.toLowerCase().includes(name)) &&
        p.price >= min &&
        p.price <= max
    );

    this.updateMinPriceMap();
  }

  updateMinPriceMap() {
    this.minPriceMap = {};

    const maxLength = Math.max(
      this.filteredCoopProducts.length,
      this.filteredCarrefourProducts.length,
      this.filteredEsselungaProducts.length
    );

    for (let i = 0; i < maxLength; i++) {
      const coopProduct = this.filteredCoopProducts[i];
      const carrefourProduct = this.filteredCarrefourProducts[i];
      const esselungaProduct = this.filteredEsselungaProducts[i];

      const availableProducts = [];
      if (coopProduct) availableProducts.push(coopProduct);
      if (carrefourProduct) availableProducts.push(carrefourProduct);
      if (esselungaProduct) availableProducts.push(esselungaProduct);

      if (availableProducts.length > 0) {
        const minPrice = Math.min(...availableProducts.map((p) => p.price));

        availableProducts.forEach((product) => {
          const productName = product.name.trim().toLowerCase();
          this.minPriceMap[productName] = minPrice;
        });
      }
    }
  }

  isMinPrice(product: ProdottiModel): boolean {
    if (!product || !product.name) return false;

    const productName = product.name.trim().toLowerCase();
    return this.minPriceMap[productName] === product.price;
  }

  isAviable(product: ProdottiModel): string {
    return product.available ? 'Available' : 'N/A';
  }

  toNumber(value: any): number {
    return Number(value);
  }
}
