import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Mydirettive } from './direttive/mydirettive';
import { AppUppercase } from "./direttive/app-uppercase";
import { ColorNumber } from './direttive/color-number';
import { ClickCounter } from './direttive/click-counter';
import {PasswordForza} from './direttive/password-forza';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Mydirettive, AppUppercase, ColorNumber, ClickCounter, PasswordForza],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App  {
  colore = "red"
  protected readonly title = signal('Direttive');
  constructor() {

  }

}
