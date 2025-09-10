import { Component, signal } from '@angular/core';
import { Mydirettive, UppercaseDirective, ColorNumberDirective, ClickCounterDirective, PasswordStrengthDirective } from './direttive/mydirettive';

@Component({
  selector: 'app-root',
  imports: [Mydirettive, UppercaseDirective, ColorNumberDirective, ClickCounterDirective, PasswordStrengthDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  colore = "lightyellow";
  protected readonly title = signal('Direttive');

  constructor() {}
}
