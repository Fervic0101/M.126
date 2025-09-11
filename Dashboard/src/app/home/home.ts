import { Component } from '@angular/core';
import { TitleElement } from '../Direttive/title-element';
import { Container } from '../Direttive/container';
import { Prodotti } from '../prodotti/prodotti';
import { BarraRicerca } from '../barra-ricerca/barra-ricerca';



@Component({
  selector: 'app-home',
  imports: [TitleElement, Container, Prodotti, BarraRicerca],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
