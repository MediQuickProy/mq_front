import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../recurrent-modules/navbar/navbar.component";

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css'],
  imports: [NavbarComponent]
})
export class HistorialComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
