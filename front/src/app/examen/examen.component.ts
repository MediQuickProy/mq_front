import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../recurrent-modules/navbar/navbar.component";
import { ExamenListComponent } from './examen-list/examen-list.component';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css'],
  imports: [
    NavbarComponent,
    ExamenListComponent
  ]
})
export class ExamenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
