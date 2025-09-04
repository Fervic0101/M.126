import { Component, Directive, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Mydirettive, UppercaseDirettiva, CambiaColoreDirettiva, ContatoreDirettiva, PasswordEfficienzaDirettiva } from './direttive/mydirettive';

@Component({
  selector: 'app-root',
  imports: [Mydirettive, UppercaseDirettiva, CambiaColoreDirettiva, ContatoreDirettiva, PasswordEfficienzaDirettiva],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App  {
  colore = "red"
  protected readonly title = signal('Direttive');
  constructor() {

  }

}

