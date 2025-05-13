import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../recurrent-modules/navbar/navbar.component";
import { PacienteListComponent } from './paciente-list/paciente-list.component';
import { PacienteFormComponent } from './paciente-form/paciente-form.component';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css'],
  imports: [
    NavbarComponent,
    PacienteListComponent,
    PacienteFormComponent
  ]
})
export class PacienteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
