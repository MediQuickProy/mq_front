import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../recurrent-modules/navbar/navbar.component";
import { HistorialListComponent } from './historial-list/historial-list.component';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css'],
  imports: [
    NavbarComponent,
    HistorialListComponent
  ]
})
export class HistorialComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
