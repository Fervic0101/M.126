import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from "@angular/material/input";
import { LoginStile } from '../Direttive/login-stile';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supermercato',
  imports: [MatInputModule,MatInputModule,MatButtonModule, MatDividerModule, MatIconModule,LoginStile,ReactiveFormsModule,CommonModule],
  templateUrl: './supermercato.html',
  styleUrl: './supermercato.css'
})
export class Supermercato {
   constructor(private router: Router) {}
  nuovoProddottoForm = new FormGroup({
    nome: new FormControl('',),
    prezzoNuovo: new FormControl(''),
    
  });
   onSubmit()
   {
    
    var nomeControllare = this.nuovoProddottoForm.get('nome');
    var prezzoNuovo = this.nuovoProddottoForm.get('prezzoNuovo');
  
   console.log(this.nuovoProddottoForm)
    if(this.nuovoProddottoForm.valid){  
      this.router.navigate(['/dashboard'], {
      queryParams: { nome: String(nomeControllare?.value),prezzo : String(prezzoNuovo?.value)}
     
    });
      alert("Modifica Prodotto in corso!");
      
    }else{
      alert("Errore! Prodotto Errato");
    }
    
   }
}
