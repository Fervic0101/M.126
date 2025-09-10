import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { ProdottiModel } from '../Model/ProdottiModel';
import { CommonModule } from '@angular/common';
import { ElementiStile } from '../Direttive/elementi-stile';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-prodotti',
  imports: [CommonModule,ElementiStile],
  templateUrl: './prodotti.html',
  styleUrl: './prodotti.css'
})
export class Prodotti {
  @Input() supermarket: number = 0;
  @Input() PrezzoDaModificare: number = 0;
  @Input( ) ProdottoDaModificare: string='';
  @Input() SeRicerca:boolean=false;
  @Input() ProdottoRicercare:string='';
  Lista : Array<ProdottiModel> = [];
  Coop : Array<ProdottiModel> = [];;
  Esselunga : Array<ProdottiModel> = [];;
  Carrefour : Array<ProdottiModel> = [];;
  PrezzoPiccolo : Array<number> =[];;

  constructor(private http: HttpClient,private route: ActivatedRoute)
  {
      
  }


  ngOnInit()
  {
      
       console.log('ok')

    this.http.get<any>('/prodotti.json').subscribe(data => {
       this.Coop = data.coop.map((p: ProdottiModel) => new ProdottiModel(p.name, p.price, p.image, p.description, p.available))
        this.Esselunga = data.esselunga.map((p: any) => new ProdottiModel(p.name, p.price, p.image, p.description, p.available))
        this.Carrefour = data.carrefour.map((p: any) => new ProdottiModel(p.name, p.price, p.image, p.description, p.available))
        for(let i=0;i<this.Coop.length;i++)
      {
        this.PrezzoPiccolo[i]=Math.min(this.Coop[i].price,this.Carrefour[i].price,this.Esselunga[i].price);
     
      }
      switch(this.supermarket)
    {
      case 0:
        
        this.Lista = this.Coop;
        this.PrezzoAggiornato()
       
        this.Ricerca()
        break;
      case 1:
        this.Lista = this.Esselunga;
        this.PrezzoAggiornato()
        this.Ricerca()
        break;
      case 2:
        this.Lista = this.Carrefour;
        this.PrezzoAggiornato()
        this.Ricerca()
        break;
      default:
        this.Lista = this.Coop;
        this.PrezzoAggiornato()
        this.Ricerca()
        break;
    }
    });
    
    
        


    }
    PrezzoAggiornato()
    {
      for(let i=0;i<this.Lista.length;i++){
          if(this.Lista[i].name==this.ProdottoDaModificare)
          {
            this.Lista[i].price=this.PrezzoDaModificare
          }
        }

    }
    Ricerca()
    {
      if(this.SeRicerca){
        for(let i=0;i<this.Lista.length;i++){
          if(this.Lista[i].name==this.ProdottoDaModificare)
          {
            this.Lista[0]= this.Lista[i]
             this.Lista.splice(1, this.Lista.length-1);
             
          }else{
            this.Lista.splice(0, this.Lista.length);
          }
        }
      }

    }

}
