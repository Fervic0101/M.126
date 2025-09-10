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
