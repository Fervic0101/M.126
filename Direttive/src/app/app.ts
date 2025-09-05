import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppPasswordStrengthDirective, AppHighlightDirective, AppUppercaseDirective, AppColorNumberDirective } from './direttive/mydirettive';

@Component({
  selector: 'app-root',
  imports: [AppPasswordStrengthDirective, AppHighlightDirective, AppUppercaseDirective, AppColorNumberDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App  {
  colore = "red"
  protected readonly title = signal('Direttive');
  constructor() {

  }

}