import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accedi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accedi.html',
  styleUrl: './accedi.css'
})
export class Accedi {
  // Dati utente
  nomeUtente: string = "Giulio Monti";
  iscrittoDa: string = "Membro dal Febbraio 2023";
  
  // Dati statistiche
  spesaTotale: number = 1247.50;
  mediaMensile: number = 296.74;
  transazioni: number = 235;
  
  // Dati prodotti acquistati
  prodottiAcquistati = [
    { nome: 'Pasta', quantita: 12, percentuale: 18 },
    { nome: 'Latte', quantita: 24, percentuale: 15 },
    { nome: 'Pane', quantita: 32, percentuale: 12 },
    { nome: 'Frutta', quantita: 28, percentuale: 10 },
    { nome: 'Verdura', quantita: 25, percentuale: 9 }
  ];
  
  // Dati supermercati
  supermercati = [
    { nome: 'Coop', visite: 32, percentuale: 35, importo: 1250.40 },
    { nome: 'Esselunga', visite: 28, percentuale: 30, importo: 1105.75 },
    { nome: 'Carrefour', visite: 10, percentuale: 11, importo: 386.05 }
  ];
  
  // Dati spesa mensile
  spesaMensile = [
    { mese: 'Gen', importo: 320.50 },
    { mese: 'Feb', importo: 285.75 },
    { mese: 'Mar', importo: 310.20 },
    { mese: 'Apr', importo: 295.30 },
    { mese: 'Mag', importo: 265.90 },
    { mese: 'Giu', importo: 240.45 }
  ];
  
  // Transazioni recenti
  transazioniRecenti = [
    { data: '15/06/2023', supermercato: 'Coop', importo: 87.30 },
    { data: '12/06/2023', supermercato: 'Esselunga', importo: 65.50 },
    { data: '03/06/2023', supermercato: 'Carrefour', importo: 95.20 }
  ];
}