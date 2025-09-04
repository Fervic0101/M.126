import { Component, signal } from '@angular/core';
import { Mydirettive } from './direttive/direttive';

@Component({
  selector: 'app-root',
  imports: [Mydirettive],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Direttivesettembre');
  msg: string = '';
}
