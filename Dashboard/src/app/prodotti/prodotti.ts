import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ProdottiModel } from '../Model/ProdottiModel';
import { NgFor } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CardDir } from '../Direttive/card-dir';

@Component({
  selector: 'app-prodotti',
  imports: [NgFor, MatCardModule, MatButtonModule, CardDir],
  templateUrl: './prodotti.html',
  styleUrl: './prodotti.css',
})
export class Prodotti {
  @Input() products: Array<ProdottiModel> = [];
}
