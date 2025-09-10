import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-searchbar',
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './searchbar.html',
  styleUrls: ['./searchbar.css'],
})
export class SearchbarComponent {
  searchName: string = '';
  minPrice: number | null = null;
  maxPrice: number | null = null;

  @Output() filterChange = new EventEmitter<{
    name: string;
    min: number | null;
    max: number | null;
  }>();

  applyFilter() {
    this.filterChange.emit({
      name: this.searchName,
      min: this.minPrice,
      max: this.maxPrice,
    });
  }
}
