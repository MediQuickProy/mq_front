import { Component, OnInit } from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms'

@Component({
  selector: 'app-examen-list',
  templateUrl: './examen-list.component.html',
  styleUrls: ['./examen-list.component.css'],
  imports: [ReactiveFormsModule],
})
export class ExamenListComponent implements OnInit {
  examenes = [
    {"id_examen": 201, "id_historial": 1, "id_paciente": 101, "fecha_realizacion": "2024-03-08"},
    {"id_examen": 202, "id_historial": 2, "id_paciente": 102, "fecha_realizacion": "2024-02-20"},
    {"id_examen": 203, "id_historial": 3, "id_paciente": 103, "fecha_realizacion": "2024-03-15"},
    {"id_examen": 204, "id_historial": 4, "id_paciente": 104, "fecha_realizacion": "2024-01-25"},
    {"id_examen": 205, "id_historial": 5, "id_paciente": 105, "fecha_realizacion": "2024-03-02"},
    {"id_examen": 206, "id_historial": 6, "id_paciente": 106, "fecha_realizacion": "2024-02-10"}
  ]

  // Variables para almacenar los valores de los inputs
  idPaciente= new FormControl('');
  idHistorial= new FormControl('');
  resultados: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  lookfor(){
    // Obtener los valores de los inputs
    const idPacienteValue = this.idPaciente.value;
    const idHistorialValue = this.idHistorial.value;

    // Filtrar los resultados según los valores de los inputs
    this.resultados = this.examenes.filter(examen => {
      if (!idPacienteValue && !idHistorialValue) {
        return false; // Si no hay filtros, mostrar todos los resultados
      }
      return (idPacienteValue ? examen.id_paciente.toString() == idPacienteValue : true) &&
             (idHistorialValue ? examen.id_historial.toString() == idHistorialValue : true);
    });
  }

}
