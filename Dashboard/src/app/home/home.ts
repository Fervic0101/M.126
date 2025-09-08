import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProdottiModel } from '../Model/ProdottiModel';
import { Prodotti } from '../prodotti/prodotti';  
import {Container} from '../Direttive/container';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [FormsModule, Prodotti,],
  templateUrl: './home.html'
})
export class Home {
  query = '';

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

  filter(list: ProdottiModel[]) {
    const q = this.query.trim().toLowerCase();
    if (!q) return list;
    return list.filter(p =>
      p.name.toLowerCase().includes(q) ||
      (p.description ?? '').toLowerCase().includes(q)
    );
  }
}
