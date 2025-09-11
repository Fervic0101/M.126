import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ProdottiModel } from '../Model/ProdottiModel';
import { NgFor, NgIf } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CardDir } from '../Direttive/card-dir';

@Component({
  selector: 'app-prodotti',
  imports: [NgFor, MatCardModule, MatButtonModule, CardDir, NgIf],
  templateUrl: './prodotti.html',
  styleUrl: './prodotti.css',
  encapsulation: ViewEncapsulation.None,
})
export class Prodotti {
  @Input() products: Array<ProdottiModel> = [];
  @Input() convenients: Array<number> = [];
}
