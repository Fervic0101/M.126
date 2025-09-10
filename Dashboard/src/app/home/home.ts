import { Component } from '@angular/core';
import { TitleElement } from '../Direttive/title-element';
import { Container } from '../Direttive/container';
import { ProdottiService } from '../services/prodotti.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [TitleElement,Container,CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  prodotti: any = {};

  constructor(private prodottiService: ProdottiService) {}

  ngOnInit() {
    this.prodottiService.getProdotti().subscribe(data => {
      this.prodotti = data;
    });
  }
}
