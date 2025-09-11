import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { NavButton } from '../Direttive/nav-button';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-menu-component',
  imports: [MatButtonModule,NavButton,RouterLink],
  templateUrl: './menu-component.html',
  styleUrl: './menu-component.css'
})
export class MenuComponent {

}
