import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../recurrent-modules/navbar/navbar.component";

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css'],
  imports: [NavbarComponent]
})
export class ExamenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
