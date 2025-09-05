import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Mydirettive } from './direttive/mydirettive';
import { AppHighlight } from './app-highlight';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Mydirettive],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App  {
  colore = "red"
  protected readonly title = signal('Direttive');
  constructor() {

  }

}
