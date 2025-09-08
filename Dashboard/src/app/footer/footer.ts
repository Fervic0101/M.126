import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatToolbar, MatIcon],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {}
