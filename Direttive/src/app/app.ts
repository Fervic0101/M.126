import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppPasswordStrengthDirective } from './direttive/mydirettive';

@Component({
  selector: 'app-root',
  imports: [AppPasswordStrengthDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App  {
  colore = "red"
  protected readonly title = signal('Direttive');
  constructor() {

  }

}