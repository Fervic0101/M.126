import { Component } from '@angular/core';
import { TitleElement } from '../Direttive/title-element';
import { Container } from '../Direttive/container';
import { Prodotti } from '../prodotti/prodotti';

@Component({
  selector: 'app-home',
  imports: [TitleElement,Container,Prodotti],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
