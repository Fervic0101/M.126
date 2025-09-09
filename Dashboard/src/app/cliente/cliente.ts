import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from "@angular/material/input";
import { LoginStile } from '../Direttive/login-stile';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Prodotti } from '../prodotti/prodotti';
import { ProdottiModel } from '../Model/ProdottiModel';
import { CommonModule } from '@angular/common';
interface SupermercatoPiuUsato {
    nome: String;
    voltePresente: number;
  }
@Component({
  selector: 'app-cliente',
  imports: [MatInputModule,MatButtonModule, MatDividerModule, MatIconModule,LoginStile,ReactiveFormsModule,CommonModule],
  templateUrl: './cliente.html',
  styleUrl: './cliente.css'
})
  

export class Cliente {
    Prodotti : Array<ProdottiModel> = [];
    spesaTotale : number =0.0;
    superUsato: SupermercatoPiuUsato = 
    {
      nome: "",
      voltePresente:0,
     
    };
    
    prodottoForm = new FormGroup({
    prodotto: new FormControl('',[Validators.required]),
    prezzo: new FormControl('',[Validators.required]),
    supermercato: new FormControl('',[Validators.required]),
  });
  
  onSubmit()
  {
    if(this.prodottoForm.valid)
    {
      this.Prodotti.push(new ProdottiModel(String(this.prodottoForm.get('prodotto')?.value),Number(this.prodottoForm.get('prezzo')?.value),"",String(this.prodottoForm.get('supermercato')?.value),true) )
      this.spesaTotale= this.spesaTotale+Number(this.prodottoForm.get('prezzo')?.value)
      this.controlloSupermercatoInTrend()

    }else{
      alert('Inserimento Fallito')
    }
  }

  controlloSupermercatoInTrend()
  {
    
    for(let i=0;i<this.Prodotti.length;i++)
    {
       if(this.Prodotti[i].description!=this.superUsato.nome)
        {
          var presente=0;
          for(let x=0;x<this.Prodotti.length;x++)
          {
            console.log(this.Prodotti[i].description+"x->"+this.Prodotti[x].description)
            if(this.Prodotti[i].description==this.Prodotti[x].description){
              presente++;
            }
          }
          if(presente>this.superUsato.voltePresente){
             console.log(this.superUsato.nome)
            this.superUsato.nome=this.Prodotti[i].description
            this.superUsato.voltePresente=presente;
          }

        }

    }
   
   
  }
  
     


  
 
}
