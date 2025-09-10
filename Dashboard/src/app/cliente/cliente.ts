import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdottiService } from '../services/prodotti.service';
import { prodottiGlobali, PrezzoItPipe } from '../supermercato/supermercato';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule, PrezzoItPipe],
  templateUrl: './cliente.html',
  styleUrls: ['./cliente.css']
})
export class Cliente {
  rimuoviDalCarrello(index: number) {
    this.carrello.splice(index, 1);
    localStorage.setItem('carrelloCliente', JSON.stringify(this.carrello));
  }
  prodottiAcquistati = 0;
  supermercatoPreferito = '';
  spesaMedia = 0;
  storicoAcquisti: any[] = [];
  carrello: any[] = [];
  prodotti: any = {};

  constructor(private prodottiService: ProdottiService) {}

  ngOnInit() {
    this.aggiornaDatiCliente();
  }

  aggiornaDatiCliente() {
    const tipo = localStorage.getItem('userType');
    if (tipo !== 'cliente') {
      window.location.href = '/login';
      return;
    }
    this.storicoAcquisti = JSON.parse(localStorage.getItem('acquistiCliente') || '[]');
    this.carrello = JSON.parse(localStorage.getItem('carrelloCliente') || '[]');
  // Conta il totale dei prodotti acquistati
  this.prodottiAcquistati = this.storicoAcquisti.reduce((tot, acquisto) => tot + (Array.isArray(acquisto.prodotti) ? acquisto.prodotti.length : 0), 0);
    const supCount: {[key: string]: number} = {};
    this.storicoAcquisti.forEach(a => {
      supCount[a.supermercato] = (supCount[a.supermercato] || 0) + 1;
    });
    this.supermercatoPreferito = Object.keys(supCount).reduce((a, b) => supCount[a] > supCount[b] ? a : b, Object.keys(supCount)[0] || '');
      // Media dei prezzi di tutti i prodotti acquistati
      const prezzi: number[] = [];
      this.storicoAcquisti.forEach(acquisto => {
        if (Array.isArray(acquisto.prodotti)) {
          acquisto.prodotti.forEach((prodotto: any) => {
            const prezzo = prodotto.price ?? prodotto.prezzo;
            if (typeof prezzo === 'number') prezzi.push(prezzo);
            else if (typeof prezzo === 'string') prezzi.push(parseFloat(prezzo.replace(',', '.')));
          });
        }
      });
      this.spesaMedia = prezzi.length > 0 ? parseFloat((prezzi.reduce((a, b) => a + b, 0) / prezzi.length).toFixed(2)) : 0;
  }

  pagaCarrello() {
    if (this.carrello.length === 0) return;
    const data = new Date().toLocaleString();
    const supermercato = this.carrello[0]?.supermercato || '';
    // Somma corretta dei prezzi, formato italiano
    const prezzoTotale = this.carrello.reduce((acc, p) => acc + (typeof p.price === 'number' ? p.price : parseFloat(p.price.replace(',', '.'))), 0);
    const acquisto = {
      prodotti: [...this.carrello],
      supermercato: supermercato,
      prezzoTotale: prezzoTotale,
      data: data
    };
    this.storicoAcquisti.push(acquisto);
    localStorage.setItem('acquistiCliente', JSON.stringify(this.storicoAcquisti));
    localStorage.setItem('carrelloCliente', JSON.stringify([]));
    this.aggiornaDatiCliente();
    alert('Pagamento effettuato! Acquisto spostato nello storico.');
  }

    // ...existing code...
}
