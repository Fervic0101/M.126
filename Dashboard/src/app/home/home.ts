import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProdottiModel } from '../Model/ProdottiModel';
import { Prodotti } from '../prodotti/prodotti';
import { Container } from '../Direttive/container';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule, NgFor } from '@angular/common';

type ProductsByMarket = Record<string, ProdottiModel[]>;

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [
    FormsModule,
    Prodotti,
    Container,
    HttpClientModule,
    CommonModule,
    NgFor,
  ],
  templateUrl: './home.html',
})
export class Home implements OnInit {
  query = '';
  onlyAvailable = false;
  minPrice: number | null = null;
  maxPrice: number | null = null;
  entries: Array<[string, ProdottiModel[]]> = [];
  convenients: Array<Array<Boolean>> = [];

  // http: HttpClient = new HttpClient... ;   NON SI FA . LE COSE PER DI NON NE HANNO BISOGNO ( ? sicuro? guardare bene)
  // => si fa nel costructor o con inject (  http = inject(HttpClient);  )

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<ProductsByMarket>('prodotti.json').subscribe((data) => {
      // es: [['coop', [...]], ['esselunga', [...]], ['carrefour', [...]]]  //ma perchè non è un oggetto di key value ? informarsi
      this.entries = Object.entries(data);
      this.markConvenientsByIndex();
    });
  }

  private markConvenientsByIndex() {
    // se i market non fossero lunghi uguale
    const maxLen = Math.max(...this.entries.map(([, arr]) => arr.length)); // "..." toglie quadre a array, e l array è l elenco di lunghezze derivanti dalla map ; [,arr] è come dire [alias, arr] se poi alias non lo usi.

    for (let i = 0; i < maxLen; i++) {
      //per ogni prodotto (primo record di coop, esselunga, carrrefour)

      let min = Number.POSITIVE_INFINITY; //cerchiamo il min per ognuno. default al massimo   (prezzo minimo di ogni prodotto della stessa categoria ( same pos in array))

      for (const [, arr] of this.entries) {
        //sto for ci sarà ovviamente per ogni record (for esterno) e (per ognuno)  fa un iterazione per ogni supermercato (per ogni record di entries) , cioè ha iterazioni [supermercato, arrayprod], supermercato non ci serve => [, arr]

        const p = arr[i]; //prende in considerazione solo il record i-esimo a cui siamo nel for esterno (prodotto i-esimo) per ognu supermercato
        if (p) min = Math.min(min, p.price); // se p non è falsy (prodotto esiste (magari arr lunghi diversi)) mettiamo a min il suo prezzo se è min senno lasciamo com '
      }
      // non farti fregare dall indentazione: siamo ancora nel ciclo grande (E min E' ANCORA IN SCOPE)
      for (const [, arr] of this.entries) {
        // forriamo uguale a prima , ma sta volta guardiamo se ciascuno dei (es. TRE) prodotti è = min e se si settiamo convenient=true
        const p = arr[i];
        if (p) p.convenient = p.price === min; //controlliamo di nuovo che p non sia falsy
      }
    }
  }

  filter(list: ProdottiModel[]) {
    const q = this.query.trim().toLowerCase();

    return list.filter((p) => {
      if (
        q &&
        !(
          p.name.toLowerCase().includes(q) ||
          (p.description ?? '').toLowerCase().includes(q)
        )
      ) {
        return false;
      }
      // adatta il nome del campo se nel tuo model non si chiama "available"
      if (this.onlyAvailable && !p.available) return false;

      if (this.minPrice != null && p.price < this.minPrice) return false;
      if (this.maxPrice != null && p.price > this.maxPrice) return false;

      return true;
    });
  }

  trackByMarket = (_: number, e: [string, ProdottiModel[]]) => e[0]; //leggi spiegazione nel tempate. _: alias come un altro , ussato per dire fregaNNiente

  /*
  Coop: ProdottiModel[] = [new ProdottiModel(
        'Patate Hermosa',
        2.99,
        false,
        'https://cdn.static-benufarma.it/cdn-cgi/image/width=750,quality=80,format=auto/https://cms.static-benufarma.it/uploads/Foto_patate_1920x1920_f12d5ba0_36ff_48f0_b7ee_45ca48ebd4cd_52024a180b.jpg_v_1739789281',
        '',
        true
      ), new ProdottiModel(
        'Taralli pugliesi fatti in loco',
        8.99,
        false,
        'https://www.tipikoshop.it/wp-content/uploads/2020/10/Taralli-pugliesi-vari-gusti.jpg',
        'Scarpe da ginnastica di alta qualità',
        true
      )];

  Esselunga: ProdottiModel[] = [new ProdottiModel(
        'Stupid Trump Potatoes',
        1.5,
        true,
        'https://chefoodrevolution.com/wp-content/uploads/2023/10/patate-dolci.jpg',
        '',
        true
      ),
    new ProdottiModel(
        'Mozzarella Ciro dop',
        4.99,
        false,
        'https://www.nutrionio.com/static/images/product/1300x600/cheese_mozzarella--nonfat.webp',
        '',
        true
      ),new ProdottiModel(
        'Taralli pugliesi',
        2.99,
        false,
        'https://www.ilcuoreinpentola.it/wp-content/uploads/2021/03/taralli-pugliesi-bimby.jpg',
        '',
        true
      ) ];
  Carrefour: ProdottiModel[] = [new ProdottiModel(
        'Patate Riccardo',
        1.99,
        false,
        'https://blog.iodonna.it/eliana-liotta-diete-fitness-benessere/files/2015/11/Patate.jpg',
        '',
        true
      ), new ProdottiModel(
        'Mozzarella Splendida',
        2.39,
        true,
        'https://caseificiomozzaricca.it/wp-content/uploads/2023/04/mozzarelladibufala_caseificiomozzaricca-600x600.webp',
        '',
        false
      ),new ProdottiModel(
        'Taralli Pam',
        1.39,
        true,
        'https://primochef.it/wp-content/uploads/2015/07/SH_taralli_pugliesi-768x512.jpg.webp',
        '',
        true
      )];*/
}
