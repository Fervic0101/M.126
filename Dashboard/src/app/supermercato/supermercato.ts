import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'prezzoIt'})
export class PrezzoItPipe implements PipeTransform {
  transform(value: number): string {
    if (value == null) return '0,00';
    return value.toFixed(2).replace('.', ',');
  }
}
// Simulazione di un servizio condiviso per i prodotti acquistati
export const prodottiGlobali: any[] = [];
import { Component } from '@angular/core';
import { ProdottiService } from '../services/prodotti.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-supermercato',
  standalone: true,
  imports: [CommonModule, PrezzoItPipe],
  templateUrl: './supermercato.html',
  styleUrls: ['./supermercato.css']
})
export class Supermercato {
  ngOnInit() {
    const tipo = localStorage.getItem('userType');
    if (tipo !== 'operatore') {
      window.location.href = '/login';
    }
  }
  prodotti: Array<{ nome: string; prezzo: number; supermercato: string; descrizione?: string }> = [];

  prodottiUnici: string[] = [];
  prezzi: any = { coop: {}, esselunga: {}, carrefour: {} };

  constructor(private prodottiService: ProdottiService) {
    // Carica prodotti base dal JSON
    this.prodottiService.getProdotti().subscribe(data => {
      const nomi = new Set<string>();
      ['coop', 'esselunga', 'carrefour'].forEach(sup => {
        if (data[sup]) {
          data[sup].forEach((p: any) => {
            nomi.add(p.name);
            this.prezzi[sup][p.name] = p;
            this.prodotti.push({ nome: p.name, prezzo: p.price, supermercato: sup, descrizione: p.description });
          });
        }
      });
      // Carica modifiche persistenti
      const modifiche = localStorage.getItem('prodottiModificati');
      if (modifiche) {
        const arr = JSON.parse(modifiche);
        arr.forEach((p: any) => {
          this.prezzi[p.supermercato][p.nome] = { name: p.nome, price: p.prezzo };
          if (!nomi.has(p.nome)) nomi.add(p.nome);
          this.prodotti.push({ nome: p.nome, prezzo: p.prezzo, supermercato: p.supermercato });
        });
      }
      this.prodottiUnici = Array.from(nomi);
    });
  }

  aggiungiProdotto(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const supermercato = (form['supermercato'] as HTMLSelectElement).value;
    const nome = (form['nome'] as HTMLInputElement).value;
    const prezzo = Number((form['prezzo'] as HTMLInputElement).value);
    if (nome && prezzo && supermercato) {
      this.prezzi[supermercato][nome] = { name: nome, price: prezzo };
      if (!this.prodottiUnici.includes(nome)) {
        this.prodottiUnici.push(nome);
      }
      // Aggiungi anche alla lista locale
      this.prodotti.push({ nome, prezzo, supermercato });
      prodottiGlobali.push({ nome, prezzo, supermercato });
      // Salva modifiche persistenti
      const modifiche = localStorage.getItem('prodottiModificati');
      let arr = modifiche ? JSON.parse(modifiche) : [];
      arr.push({ nome, prezzo, supermercato });
      localStorage.setItem('prodottiModificati', JSON.stringify(arr));
      form.reset();
    }
  }

  rimuoviProdotto(supermercato: string, nomeProdotto: string) {
    // Rimuovi dal confronto prezzi
    if (this.prezzi[supermercato][nomeProdotto]) {
      delete this.prezzi[supermercato][nomeProdotto];
    }
    // Rimuovi dalla lista locale
    this.prodotti = this.prodotti.filter(p => !(p.nome === nomeProdotto && p.supermercato === supermercato));
    // Rimuovi dalla lista globale
    const idxGlobal = prodottiGlobali.findIndex(p => p.nome === nomeProdotto && p.supermercato === supermercato);
    if (idxGlobal !== -1) prodottiGlobali.splice(idxGlobal, 1);
    // Rimuovi anche da localStorage
    const modifiche = localStorage.getItem('prodottiModificati');
    let arr = modifiche ? JSON.parse(modifiche) : [];
    arr = arr.filter((p: any) => !(p.nome === nomeProdotto && p.supermercato === supermercato));
    localStorage.setItem('prodottiModificati', JSON.stringify(arr));
    // Se il prodotto non esiste più in nessun supermercato, rimuovilo da prodottiUnici
    const ancoraPresente = ['coop','esselunga','carrefour'].some(sup => this.prezzi[sup][nomeProdotto]);
    if (!ancoraPresente) {
      this.prodottiUnici = this.prodottiUnici.filter(n => n !== nomeProdotto);
    }
  }
}
