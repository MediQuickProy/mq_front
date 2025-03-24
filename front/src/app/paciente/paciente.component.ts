import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../recurrent-modules/navbar/navbar.component";

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css'],
  imports: [NavbarComponent]
})
export class PacienteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
