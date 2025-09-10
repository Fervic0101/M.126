import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ProdottiModel } from '../Model/ProdottiModel';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { Filter } from '../Model/Filter';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prodotti',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    FormsModule,
  ],
  templateUrl: './prodotti.html',
  styleUrls: ['./prodotti.css'],
})
export class Prodotti implements OnInit, OnChanges {
  @Input() supermarket: number = 0;
  @Input() filters: Filter = { name: '', min: null, max: null };
  @Input() highlightedProducts: string[] = [];

  @Output() loaded = new EventEmitter<ProdottiModel[]>();
  Lista: ProdottiModel[] = [];
  displayedColumns: string[] = ['name', 'price', 'description'];
  dataSource = new MatTableDataSource<ProdottiModel>([]);

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('/prodotti.json').subscribe((data) => {
      switch (this.supermarket) {
        case 0:
          this.Lista = data.coop.map(
            (p: any) =>
              new ProdottiModel(
                p.name,
                p.price,
                p.image,
                p.description,
                p.available
              )
          );
          break;
        case 1:
          this.Lista = data.esselunga.map(
            (p: any) =>
              new ProdottiModel(
                p.name,
                p.price,
                p.image,
                p.description,
                p.available
              )
          );
          break;
        case 2:
          this.Lista = data.carrefour.map(
            (p: any) =>
              new ProdottiModel(
                p.name,
                p.price,
                p.image,
                p.description,
                p.available
              )
          );
          break;
      }

      this.dataSource.data = this.Lista;

      const keywordGroups: string[][] = [
        ['Pasta'],
        ['Latte'],
        ['Olio'],
        ['Riso'],
        ['Mozzarella'],
        ['Yogurt'],
        ['Acqua'],
        ['Biscotti'],
        ['Zucchero'],
        ['Sale'],
        ['Tonno'],
        ['Pomodori'],
        ['Uova'],
        ['Detersivo'],
        ['Carta'],
        ['Shampoo'],
        ['Sapone'],
        ['Dentifricio'],
        ['Sacchetti'],
        ['Batterie'],
      ];
      console.log(keywordGroups);

      this.highlightedProducts = [];

      keywordGroups.forEach((group: string[]) => {
        let minProduct: ProdottiModel | null = null;

        group.forEach((keyword: string) => {
          const matches = this.Lista.filter((p) =>
            p.name.toLowerCase().includes(keyword.toLowerCase())
          );

          matches.forEach((p) => {
            if (!minProduct || p.price < minProduct.price) {
              minProduct = p;
            }
          });
        });

        if (minProduct) {
          this.highlightedProducts.push(minProduct);
        }
      });

      this.dataSource.filterPredicate = (
        data: ProdottiModel,
        filter: string
      ) => {
        if (!filter) {
          return true;
        }

        const filters: Filter = JSON.parse(filter);

        if (!filters.name && filters.min === null && filters.max === null) {
          return true;
        }

        const matchesName =
          !filters.name ||
          data.name.toLowerCase().includes(filters.name.toLowerCase());

        const matchesPrice =
          (filters.min === null || data.price >= filters.min) &&
          (filters.max === null || data.price <= filters.max);

        return matchesName && matchesPrice;
      };
      this.loaded.emit(this.Lista);
    });
  }

  isHighlighted(product: ProdottiModel): boolean {
    return this.highlightedProducts.includes(product.name);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['filters'] && this.dataSource) {
      this.applyFilter(this.filters);
    }
  }

  applyFilter(filters: Filter) {
    if (!filters.name && filters.min === null && filters.max === null) {
      this.dataSource.filter = '';
    } else {
      this.dataSource.filter = JSON.stringify(filters);
    }

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
