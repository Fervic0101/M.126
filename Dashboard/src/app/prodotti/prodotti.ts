import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
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
})
export class Prodotti {
  @Input() products: Array<ProdottiModel> = [];
  @Input() convenients: Array<number> = [];
  /*
import { Component, Input } from '@angular/core';
import { ProdottiModel } from '../Model/ProdottiModel';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-prodotti',
  imports: [],
  templateUrl: './prodotti.html',
  styleUrl: './prodotti.css'
})
export class Prodotti {
  @Input() supermarket: number = 0;
  Lista : Array<ProdottiModel> = [];
Coop : Array<ProdottiModel> = [];
Esselunga : Array<ProdottiModel> = [];
   constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get<any>('/prodotti.json').subscribe(data => {
      console.log(data);
      switch (this.supermarket) {
        case 0:
          this.Lista = data.coop.map((p: any) =>
            new ProdottiModel(p.name, p.price, p.image, p.description, p.available)
          );
          break;
        case 1:
          this.Lista = data.esselunga.map((p: any) =>
            new ProdottiModel(p.name, p.price, p.image, p.description, p.available)
          );
          break;
        case 2:
          this.Lista = data.carrefour.map((p: any) =>
            new ProdottiModel(p.name, p.price, p.image, p.description, p.available)
          );
          break;
      }
    });
  }
*/
}
