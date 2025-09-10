import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu-component/menu-component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { JsonPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MenuComponent,HttpClientModule,JsonPipe,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Dashboard');
  prodotti: any = {};
  constructor(private http: HttpClient) {
    this.http.get('assets/prodotti.json').subscribe(data => {
      this.prodotti = data;
    });
  }
}
