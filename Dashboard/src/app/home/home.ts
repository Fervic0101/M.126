import { ChangeDetectorRef, Component } from '@angular/core';
import { TitleElement } from '../Direttive/title-element';
import { Container } from '../Direttive/container';
import { Prodotti } from '../prodotti/prodotti';
import { ActivatedRoute } from '@angular/router';
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [TitleElement, Container, Prodotti, MatInputModule,MatFormFieldModule, FormsModule, MatButtonModule, MatIconModule,CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  prodMod : string = ''
  prezzMod : number = 0.0
  Ricerca:string =''
  
  constructor(private route: ActivatedRoute)
  {
      
  }
 ngOnInit()
 {
  this.route.queryParams.subscribe(params => 
      {
        if (params['nome']) {
          this.prodMod = params['nome'];
        
          localStorage.setItem('nome', this.prodMod);
        } else {
          
          this.prodMod = localStorage.getItem('nome') || '';
        }

        if (params['prezzo']) {
          this.prezzMod = params['prezzo'];
        
          localStorage.setItem('prezzo', String(this.prezzMod));
        } else {
          
         this.prezzMod =  Number(localStorage.getItem('prezzo') || '');
        }
      });

 }

  


}
