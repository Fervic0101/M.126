import { Component, Input } from '@angular/core';
import { ProdottiModel } from '../Model/ProdottiModel';
import { CommonModule } from '@angular/common';
import { ElementiStile } from '../Direttive/elementi-stile';

@Component({
  selector: 'app-prodotti',
  imports: [CommonModule,ElementiStile],
  templateUrl: './prodotti.html',
  styleUrl: './prodotti.css'
})
export class Prodotti {
  @Input() supermarket: number = 0;
  Lista : Array<ProdottiModel> = [];
  Coop : Array<ProdottiModel> = [];;
  Esselunga : Array<ProdottiModel> = [];;
  Carrefour : Array<ProdottiModel> = [];;
  constructor()
  {
    this.Coop.push(new ProdottiModel('Banana',1.76,'https://www.ortitaly.it/wp-content/uploads/2020/10/Carote.jpg','La banana è la bacca della pianta del banano, originario dei paesi con clima tropicale nel Sud-est asiatico ',true),new ProdottiModel('Patata',1.44,'https://www.verdepiusnc.it/wp-content/uploads/2016/06/Potato.jpg','La patata bianca ha la polpa farinosa ed è indicata per la preparazione di piatti come il purè, gnocchi, crocchette e sformati.',false),new ProdottiModel('Carota',0.75,'Carote.png','È un ortaggio che viene coltivato dovunque ci sia un clima mite. La carota è in assoluto la fonte più ricca di vitamina A.',false));
    this.Esselunga.push(new ProdottiModel('Banana',1.00,'https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg','La banana è la bacca della pianta del banano, originario dei paesi con clima tropicale nel Sud-est asiatico',true),new ProdottiModel('Patata',0.78,'https://www.verdepiusnc.it/wp-content/uploads/2016/06/Potato.jpg','La patata bianca ha la polpa farinosa ed è indicata per la preparazione di piatti come il purè, gnocchi, crocchette e sformati.',false),new ProdottiModel('Carota',0.90,'https://i0.wp.com/www.ortopronto.it/wp-content/uploads/2019/05/Carote.png?fit=900%2C900&ssl=1https://i0.wp.com/www.ortopronto.it/wp-content/uploads/2019/05/Carote.png','È un ortaggio che viene coltivato dovunque ci sia un clima mite. La carota è in assoluto la fonte più ricca di vitamina A.',false));
    this.Carrefour.push( new ProdottiModel('Banana',1.67,'https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg','La banana è la bacca della pianta del banano, originario dei paesi con clima tropicale nel Sud-est asiatico',false),new ProdottiModel('Patata',1.34,'https://www.verdepiusnc.it/wp-content/uploads/2016/06/Potato.jpg','La patata bianca ha la polpa farinosa ed è indicata per la preparazione di piatti come il purè, gnocchi, crocchette e sformati.',false),new ProdottiModel('Carota',0.77,'https://i0.wp.com/www.ortopronto.it/wp-content/uploads/2019/05/Carote.png?fit=900%2C900&ssl=1https://i0.wp.com/www.ortopronto.it/wp-content/uploads/2019/05/Carote.png','È un ortaggio che viene coltivato dovunque ci sia un clima mite. La carota è in assoluto la fonte più ricca di vitamina A.',false));
  }
  ngOnInit(){
    switch(this.supermarket)
    {
      case 0:
        this.Lista = this.Coop;
        break;
      case 1:
        this.Lista = this.Esselunga;
        break;
      case 2:
        this.Lista = this.Carrefour;
        break;
      default:
        this.Lista = this.Coop;
        break;
    }

    }
}
