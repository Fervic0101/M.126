import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Mydirettive } from './direttive/mydirettive';
import {appUpperDirettive} from './direttive/mydirettive';
import {appColorNumber} from './direttive/mydirettive';
import { appClickCounter } from './direttive/mydirettive';
import {appPasswordStrength} from './direttive/mydirettive';

@Component({
  selector: 'app-root',
  imports: [Mydirettive, appUpperDirettive, appColorNumber, appClickCounter, appPasswordStrength],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App  {
  colore = "red"
  protected readonly title = signal('Direttive');
  constructor() {

  }

}


