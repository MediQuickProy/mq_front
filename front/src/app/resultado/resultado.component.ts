import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../recurrent-modules/navbar/navbar.component';
import { ResultadoListComponent } from './resultado-list/resultado-list.component';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css'],
  imports: [
      NavbarComponent,
      ResultadoListComponent,
      
    ]
})
export class ResultadoComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

}
