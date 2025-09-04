import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Mydirettive } from './direttive/mydirettive';
import { AppUppercase } from './direttive/app-uppercase';
import { PasswordStrenght } from './direttive/password-strenght';

@Component({
  selector: 'app-root',
  imports: [Mydirettive, AppUppercase, PasswordStrenght],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  colore = 'red';
  protected readonly title = signal('Direttive');
  constructor() {}
}
