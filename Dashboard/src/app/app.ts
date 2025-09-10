import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu-component/menu-component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { JsonPipe, CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MenuComponent,HttpClientModule,JsonPipe,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  onResetFiltri() {
    // Trova il componente Home e chiama resetFiltri se presente
    const home = document.querySelector('app-home');
    if (home && 'resetFiltri' in home) {
      (home as any).resetFiltri();
    }
    // In alternativa, si può gestire con un servizio condiviso o segnale
  }
  onRipristinaProdottiClick(event: Event) {
    event.preventDefault();
    if (this.userType === 'operatore') {
      this.ripristinaTuttiProdotti();
    }
  }
  ripristinaTuttiProdotti() {
    localStorage.removeItem('prodottiEliminati');
    window.location.reload();
  }
  protected readonly title = signal('Dashboard');
  prodotti: any = {};
  isLoggedIn = false;
  userType: string | null = null;

  constructor(private http: HttpClient, private auth: AuthService) {
    this.http.get('assets/prodotti.json').subscribe(data => {
      this.prodotti = data;
    });
    this.auth.isLoggedIn.subscribe(val => this.isLoggedIn = val);
    this.auth.userType.subscribe(val => this.userType = val);
  }

  logout() {
    this.auth.logout();
    window.location.href = '/login';
  }
}
