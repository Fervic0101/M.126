import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
  templateUrl: './admin-page.html',
  styleUrls: ['./admin-page.css'],
})
export class AdminPage {
  newProduct = {
    name: '',
    price: 0,
    description: '',
    available: true,
  };

  addProduct() {
    console.log('Prodotto inserito:', this.newProduct);
    alert(`Prodotto "${this.newProduct.name}" inserito!`);

    this.newProduct = { name: '', price: 0, description: '', available: true };
  }
}
