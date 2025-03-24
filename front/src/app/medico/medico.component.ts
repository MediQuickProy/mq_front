import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../recurrent-modules/navbar/navbar.component";

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css'],
  imports: [
    NavbarComponent
  ]
})
export class MedicoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
