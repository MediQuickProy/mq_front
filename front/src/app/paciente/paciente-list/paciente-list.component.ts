import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-paciente-list',
  templateUrl: './paciente-list.component.html',
  styleUrls: ['./paciente-list.component.css'],
  imports: [ReactiveFormsModule],
})
export class PacienteListComponent implements OnInit {
  idPaciente = new FormControl('');
  resultados: any[] = [];

  pacientes = [{ "id": 1, "nombre": "Juan Pérez", "fechaNacimiento": "1990-05-14" }, 
    { "id": 2, "nombre": "Ana Gómez", "fechaNacimiento": "1985-09-22" }, 
    { "id": 3, "nombre": "Carlos López", "fechaNacimiento": "2000-01-30" }, 
    { "id": 4, "nombre": "Angelica Gonzales", "fechaNacimiento": "2004-04-10" }];

  constructor() { }

  ngOnInit() {
  }

  lookfor(){
    // Obtener los valores de los inputs
    const idPacienteValue = this.idPaciente.value;

    // Filtrar los resultados según los valores de los inputs
    this.resultados = this.pacientes.filter(paciente => {
      if (!idPacienteValue) {
        return false; // Si no hay filtros, mostrar todos los resultados
      }
      return (idPacienteValue ? paciente.id.toString() == idPacienteValue : true);
    });
  }

}
