import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Prodotto {
  nome: string;
  quantita: number;
  percentuale: number;
  categoria: string;
  tendenza: 'up' | 'down' | 'stable';
}

interface Supermercato {
  nome: string;
  visite: number;
  percentuale: number;
  importo: number;
  logo?: string;
  preferito: boolean;
}

interface Transazione {
  data: string;
  supermercato: string;
  importo: number;
  punti: number;
}

interface SpesaMensile {
  mese: string;
  importo: number;
  tendenza: 'up' | 'down' | 'stable';
  variazione: number;
}

@Component({
  selector: 'app-accedi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accedi.html',
  styleUrls: ['./accedi.css']
})
export class Accedi implements OnInit {
  // Dati utente
  nomeUtente: string = "Giulio Monti";
  iscrittoDa: string = "Membro dal Febbraio 2023";
  livelloFedelta: string = "Gold";
  puntiFedelta: number = 3450;
  
  // Dati statistiche
  spesaTotale: number = 1247.50;
  mediaMensile: number = 296.74;
  transazioni: number = 235;
  risparmioTotale: number = 187.25;
  
  // Dati prodotti acquistati
  prodottiAcquistati: Prodotto[] = [
    { nome: 'Pasta Barilla', quantita: 12, percentuale: 18, categoria: 'Alimentari', tendenza: 'up' },
    { nome: 'Latte Parmalat', quantita: 24, percentuale: 15, categoria: 'Latticini', tendenza: 'stable' },
    { nome: 'Pane Casereccio', quantita: 32, percentuale: 12, categoria: 'Forno', tendenza: 'up' },
    { nome: 'Mele', quantita: 28, percentuale: 10, categoria: 'Frutta', tendenza: 'down' },
    { nome: 'Insalata', quantita: 25, percentuale: 9, categoria: 'Verdura', tendenza: 'stable' }
  ];
  
  // Dati supermercati
  supermercati: Supermercato[] = [
    { nome: 'Coop', visite: 32, percentuale: 35, importo: 1250.40, preferito: true },
    { nome: 'Esselunga', visite: 28, percentuale: 30, importo: 1105.75, preferito: false },
    { nome: 'Carrefour', visite: 10, percentuale: 11, importo: 386.05, preferito: false }
  ];
  
  // Dati spesa mensile
  spesaMensile: SpesaMensile[] = [
    { mese: 'Gen', importo: 320.50, tendenza: 'up', variazione: 5.2 },
    { mese: 'Feb', importo: 285.75, tendenza: 'down', variazione: -10.8 },
    { mese: 'Mar', importo: 310.20, tendenza: 'up', variazione: 8.5 },
    { mese: 'Apr', importo: 295.30, tendenza: 'down', variazione: -4.8 },
    { mese: 'Mag', importo: 265.90, tendenza: 'down', variazione: -10.0 },
    { mese: 'Giu', importo: 240.45, tendenza: 'down', variazione: -9.6 }
  ];
  
  // Transazioni recenti
  transazioniRecenti: Transazione[] = [
    { data: '15/06/2023', supermercato: 'Coop', importo: 87.30, punti: 87 },
    { data: '12/06/2023', supermercato: 'Esselunga', importo: 65.50, punti: 65 },
    { data: '03/06/2023', supermercato: 'Carrefour', importo: 95.20, punti: 95 }
  ];

  // Categorie di spesa
  categorieSpesa = [
    { nome: 'Alimentari', percentuale: 45, colore: '#4c51bf' },
    { nome: 'Cancelleria', percentuale: 15, colore: '#ed64a6' },
    { nome: 'Igiene', percentuale: 20, colore: '#38b2ac' },
    { nome: 'Bevande', percentuale: 12, colore: '#ecc94b' },
    { nome: 'Altro', percentuale: 8, colore: '#667eea' }
  ];

  // Metodi di utilità
  getTendenzaIcona(tendenza: string): string {
    switch(tendenza) {
      case 'up': return '↗';
      case 'down': return '↘';
      default: return '→';
    }
  }

  getTendenzaClasse(tendenza: string): string {
    switch(tendenza) {
      case 'up': return 'tendenza-up';
      case 'down': return 'tendenza-down';
      default: return 'tendenza-stable';
    }
  }

  togglePreferito(supermercato: Supermercato): void {
    supermercato.preferito = !supermercato.preferito;
  }

  ngOnInit(): void {
    // Simulazione di caricamento dati asincrono
    setTimeout(() => {
      console.log('Dati caricati');
    }, 500);
  }
}