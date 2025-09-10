import { PrezzoItPipe } from '../supermercato/supermercato';
import { Component } from '@angular/core';
import { TitleElement } from '../Direttive/title-element';
import { Container } from '../Direttive/container';
import { ProdottiService } from '../services/prodotti.service';
import { prodottiGlobali } from '../supermercato/supermercato';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [TitleElement,Container,CommonModule,HttpClientModule,FormsModule,PrezzoItPipe],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  resetFiltri() {
    this.filtroNome = '';
    this.prezzoMin = 0;
    this.prezzoMax = 0;
  }
  ripristinaTuttiProdotti() {
    localStorage.removeItem('prodottiEliminati');
    window.location.reload();
  }
  filtroNome: string = '';
  prezzoMin: number = 0;
  prezzoMax: number = 0;

  prodottiUniciFiltrati(): string[] {
    const eliminati = localStorage.getItem('prodottiEliminati');
    const prodottiEliminati = eliminati ? JSON.parse(eliminati) : [];
    // Filtra come prima
    const filtrati = this.prodottiUnici.filter(nome => {
      if (prodottiEliminati.includes(nome)) return false;
      const nomeMatch = !this.filtroNome || nome.toLowerCase().includes(this.filtroNome.toLowerCase());
      const prezzi = ['coop', 'esselunga', 'carrefour']
        .map(sup => this.prodottiPerSupermercato[nome]?.[sup]?.price)
        .filter(p => typeof p === 'number');
      const prezzoMinimo = prezzi.length ? Math.min(...prezzi) : 0;
      const prezzoMatch = (!this.prezzoMin || prezzoMinimo >= this.prezzoMin) && (!this.prezzoMax || prezzoMinimo <= this.prezzoMax);
      return nomeMatch && prezzoMatch;
    });
    // Se filtroNome è attivo, porta i match esatti in cima
    if (this.filtroNome) {
      const esatti = filtrati.filter(n => n.toLowerCase() === this.filtroNome.toLowerCase());
      const altri = filtrati.filter(n => n.toLowerCase() !== this.filtroNome.toLowerCase());
      return [...esatti, ...altri];
    }
    return filtrati;
  }
  isClienteLoggato = false;
  aggiungiAlCarrello(nomeProdotto: string, supermercato: string) {
    const prodotto = this.prodottiPerSupermercato[nomeProdotto]?.[supermercato];
    if (!prodotto) return;
    const carrello = JSON.parse(localStorage.getItem('carrelloCliente') || '[]');
    carrello.push({
      name: nomeProdotto,
      supermercato,
      price: prodotto.price,
      date: new Date().toLocaleDateString()
    });
    localStorage.setItem('carrelloCliente', JSON.stringify(carrello));
    alert('Prodotto aggiunto al carrello! Verrai reindirizzato all’area personale per completare l’acquisto.');
    window.location.href = '/cliente';
  }
  isPrezzoMinimo(nomeProdotto: string, supermercato: string): boolean {
    const prezzi = ['coop', 'esselunga', 'carrefour']
      .map(sup => this.prodottiPerSupermercato[nomeProdotto]?.[sup]?.price)
      .filter(p => typeof p === 'number');
    if (!prezzi.length) return false;
    const prezzoMin = Math.min(...prezzi);
    return this.prodottiPerSupermercato[nomeProdotto]?.[supermercato]?.price === prezzoMin;
  }
  getImageForProduct(nome: string): string {
    const coop = this.prodotti.coop?.find((p: any) => p.name === nome);
    if (coop && coop.image) return coop.image;
    const esselunga = this.prodotti.esselunga?.find((p: any) => p.name === nome);
    if (esselunga && esselunga.image) return esselunga.image;
    const carrefour = this.prodotti.carrefour?.find((p: any) => p.name === nome);
    if (carrefour && carrefour.image) return carrefour.image;
    return 'https://img.icons8.com/ios-filled/50/cccccc/box.png';
  }
  prodotti: any = {};
  prodottiUnici: string[] = [];
  prodottiPerSupermercato: any = {};

  constructor(private prodottiService: ProdottiService) {}

  categorie = [
    { nome: 'Pasta', match: /pasta/i },
    { nome: 'Latte', match: /latte/i },
    { nome: 'Olio', match: /olio/i },
    { nome: 'Riso', match: /riso/i },
    { nome: 'Mozzarella', match: /mozzarella/i },
    { nome: 'Yogurt', match: /yogurt/i },
    { nome: 'Acqua', match: /acqua/i },
    { nome: 'Biscotti', match: /biscotti/i },
    { nome: 'Zucchero', match: /zucchero/i },
    { nome: 'Sale', match: /sale/i },
    { nome: 'Tonno', match: /tonno/i },
    { nome: 'Pomodoro|passata|pelati|salsa/i', match: /pomodoro|passata|pelati|salsa/i },
    { nome: 'Uova', match: /uova/i },
    { nome: 'Pane', match: /pane/i },
    { nome: 'Detersivo', match: /detersivo/i },
    { nome: 'Carta', match: /carta/i },
    { nome: 'Shampoo', match: /shampoo/i },
    { nome: 'Sapone', match: /sapone/i },
    { nome: 'Dentifricio', match: /dentifricio/i },
    { nome: 'Batterie', match: /batterie/i }
  ];

  prodottiPerCategoria: any = {};

  ngOnInit() {
  this.isClienteLoggato = localStorage.getItem('userType') === 'cliente';
    this.prodottiService.getProdotti().subscribe(data => {
      ['coop', 'esselunga', 'carrefour'].forEach(sup => {
        if (!data[sup]) data[sup] = [];
      });
      prodottiGlobali.forEach(p => {
        if (p.supermercato && data[p.supermercato]) {
          if (!data[p.supermercato].some((x: any) => x.name === p.nome)) {
            data[p.supermercato].push({ name: p.nome, price: p.prezzo });
          }
        }
      });
      const modifiche = localStorage.getItem('prodottiModificati');
      if (modifiche) {
        const arr = JSON.parse(modifiche);
        arr.forEach((p: any) => {
          if (p.supermercato && data[p.supermercato]) {
            if (!data[p.supermercato].some((x: any) => x.name === p.nome)) {
              data[p.supermercato].push({ name: p.nome, price: p.prezzo });
            }
          }
        });
      }
      // Costruisci lista prodotti unica
      const nomi = new Set<string>();
      ['coop', 'esselunga', 'carrefour'].forEach(sup => {
        data[sup].forEach((p: any) => nomi.add(p.name));
      });
      this.prodottiUnici = Array.from(nomi);
      // Costruisci mappa prodotto-supermercato
      this.prodottiPerSupermercato = {};
      this.prodottiUnici.forEach(nome => {
        this.prodottiPerSupermercato[nome] = {
          coop: data.coop.find((p: any) => p.name === nome) || null,
          esselunga: data.esselunga.find((p: any) => p.name === nome) || null,
          carrefour: data.carrefour.find((p: any) => p.name === nome) || null
        };
      });
      this.prodotti = data;
    });
  }
}
