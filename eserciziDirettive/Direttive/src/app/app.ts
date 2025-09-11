import { Component, signal } from '@angular/core';
import { AppHighlight } from './directive/app-highlight'; 
import { UpperCase } from './directive/upper-case';
import { ClickCounter } from './directive/click-counter';
import { ColorNumber } from './directive/color-number';
import { PasswordStrength } from './directive/password-strength';

@Component({
  selector: 'app-root',
  imports: [AppHighlight, UpperCase, ClickCounter, ColorNumber, PasswordStrength],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  colore = "black"
  protected readonly title = signal('Direttive');
}
