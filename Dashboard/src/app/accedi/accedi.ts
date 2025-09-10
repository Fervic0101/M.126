import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-accedi',
  imports: [FormsModule, MatButton],
  templateUrl: './accedi.html',
  styleUrl: './accedi.css',
})
export class Accedi {}
