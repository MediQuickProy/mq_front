import { Component, OnInit } from '@angular/core';
import { ExamenDetailComponent } from '../examen-detail/examen-detail.component';

@Component({
  selector: 'app-examen-list',
  templateUrl: './examen-list.component.html',
  styleUrls: ['./examen-list.component.css']
})
export class ExamenListComponent implements OnInit {

  mostrarModal = false;
  examenes = [
    {"id_examen": 201, "id_historial": 1, "id_paciente": 101, "fecha_realizacion": "2024-03-08"},
    {"id_examen": 202, "id_historial": 2, "id_paciente": 102, "fecha_realizacion": "2024-02-20"},
    {"id_examen": 203, "id_historial": 3, "id_paciente": 103, "fecha_realizacion": "2024-03-15"},
    {"id_examen": 204, "id_historial": 4, "id_paciente": 104, "fecha_realizacion": "2024-01-25"},
    {"id_examen": 205, "id_historial": 5, "id_paciente": 105, "fecha_realizacion": "2024-03-02"},
    {"id_examen": 206, "id_historial": 6, "id_paciente": 106, "fecha_realizacion": "2024-02-10"}
]

  constructor() { }

  ngOnInit() {
  }

  lookfor(){
  }
}
