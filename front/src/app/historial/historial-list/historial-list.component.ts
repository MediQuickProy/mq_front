import { Component, OnInit } from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms'

@Component({
  selector: 'app-historial-list',
  templateUrl: './historial-list.component.html',
  styleUrls: ['./historial-list.component.css'],
  imports: [ReactiveFormsModule],
})
export class HistorialListComponent implements OnInit {
  historiales = [
    {"id_historial": 1, "id_paciente": 101, "fecha_actualizacion": "2024-03-10"},
    {"id_historial": 2, "id_paciente": 102, "fecha_actualizacion": "2024-02-25"},
    {"id_historial": 3, "id_paciente": 103, "fecha_actualizacion": "2024-03-18"},
    {"id_historial": 4, "id_paciente": 104, "fecha_actualizacion": "2024-01-30"},
    {"id_historial": 5, "id_paciente": 105, "fecha_actualizacion": "2024-03-05"},
    {"id_historial": 6, "id_paciente": 106, "fecha_actualizacion": "2024-02-15"},
    {"id_historial": 7, "id_paciente": 107, "fecha_actualizacion": "2024-03-20"}
  ]

  // Variables para almacenar los valores de los inputs
  idPaciente= new FormControl('');
  resultados: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  lookfor(){
    // Obtener los valores de los inputs
    const idPacienteValue = this.idPaciente.value;

    // Filtrar los resultados según los valores de los inputs
    this.resultados = this.historiales.filter(historial => {
      if (!idPacienteValue) {
        return false; // Si no hay filtros, mostrar todos los resultados
      }
      return (idPacienteValue ? historial.id_paciente.toString() == idPacienteValue : true);
    }
    );
  }
}
