import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './footer/footer';
import { MenuComponent } from './menu-component/menu-component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, MenuComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Dashboard');
}
