import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../recurrent-modules/navbar/navbar.component";

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css'],
  imports: [NavbarComponent]
})
export class EventoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
