import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu-component/menu-component';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MenuComponent,ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Dashboard');
}
