import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paciente-list',
  templateUrl: './paciente-list.component.html',
  styleUrls: ['./paciente-list.component.css']
})
export class PacienteListComponent implements OnInit {
  pacientes: any = [{ "id": 1, "nombre": "Juan Pérez", "fechaNacimiento": "1990-05-14" }, 
    { "id": 2, "nombre": "Ana Gómez", "fechaNacimiento": "1985-09-22" }, 
    { "id": 3, "nombre": "Carlos López", "fechaNacimiento": "2000-01-30" }, 
    { "id": 4, "nombre": "Angelica Gonzales", "fechaNacimiento": "2004-04-10" }];

  constructor() { }

  ngOnInit() {
  }

  log_in(){

  }

}
