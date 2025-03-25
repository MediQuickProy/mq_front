import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historial-list',
  templateUrl: './historial-list.component.html',
  styleUrls: ['./historial-list.component.css']
})
export class HistorialListComponent implements OnInit {
  historiales: any = [
    {"id_historial": 1, "id_paciente": 101, "fecha_actualizacion": "2024-03-10"},
    {"id_historial": 2, "id_paciente": 102, "fecha_actualizacion": "2024-02-25"},
    {"id_historial": 3, "id_paciente": 103, "fecha_actualizacion": "2024-03-18"},
    {"id_historial": 4, "id_paciente": 104, "fecha_actualizacion": "2024-01-30"},
    {"id_historial": 5, "id_paciente": 105, "fecha_actualizacion": "2024-03-05"},
    {"id_historial": 6, "id_paciente": 106, "fecha_actualizacion": "2024-02-15"},
    {"id_historial": 7, "id_paciente": 107, "fecha_actualizacion": "2024-03-20"}
]

  constructor() { }

  ngOnInit() {
  }

  lookfor(){

  }
}
