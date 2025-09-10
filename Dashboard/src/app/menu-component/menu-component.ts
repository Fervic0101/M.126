import { Component, Input, Output, EventEmitter } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { NavButton } from '../Direttive/nav-button';
import { RouterLink } from '@angular/router';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-menu-component',
  imports: [MatButtonModule,NavButton,RouterLink,CommonModule,UpperCasePipe,FormsModule],
  templateUrl: './menu-component.html',
  styleUrl: './menu-component.css'
})
export class MenuComponent {
  isHome: boolean = false;
  filtroNome: string = '';
  prezzoMin: number = 0;
  prezzoMax: number = 0;
  prodottiDisponibili: string[] = [];

  @Output() filtraProdotti = new EventEmitter<{ nome: string, min: number, max: number }>();

  ngOnInit() {
    // Determina se la route è /dashboard
    this.isHome = window.location.pathname === '/dashboard';
    // Carica i prodotti disponibili solo se in home
    if (this.isHome) {
      const prodotti = localStorage.getItem('prodottiUnici');
      this.prodottiDisponibili = prodotti ? JSON.parse(prodotti) : [];
    }
  }

  applicaFiltri() {
    this.filtraProdotti.emit({ nome: this.filtroNome, min: this.prezzoMin, max: this.prezzoMax });
  }
  @Input() isLoggedIn: boolean = false;
  @Input() userType: string | null = null;
  @Output() logoutEvent = new EventEmitter<void>();

  logout() {
    this.logoutEvent.emit();
  }
}
