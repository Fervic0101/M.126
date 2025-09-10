import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdottiService } from '../services/prodotti.service';
import { prodottiGlobali } from '../supermercato/supermercato';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule],
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
    this.prodottiAcquistati = this.storicoAcquisti.length;
    const supCount: {[key: string]: number} = {};
    this.storicoAcquisti.forEach(a => {
      supCount[a.supermercato] = (supCount[a.supermercato] || 0) + 1;
    });
    this.supermercatoPreferito = Object.keys(supCount).reduce((a, b) => supCount[a] > supCount[b] ? a : b, Object.keys(supCount)[0] || '');
      this.spesaMedia = this.storicoAcquisti.length > 0 ?
        parseFloat((this.storicoAcquisti.reduce((acc, p) => acc + p.price, 0) / this.storicoAcquisti.length).toFixed(2)) : 0;
  }

  pagaCarrello() {
      if (this.carrello.length === 0) return;
      const data = new Date().toLocaleString();
      const supermercato = this.carrello[0]?.supermercato || '';
      const prezzoTotale = this.carrello.reduce((acc, p) => acc + p.prezzo, 0);
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
