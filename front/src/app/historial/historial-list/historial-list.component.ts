import { Component, OnInit } from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms'
import { HistorialService } from '../historial.service';
import { Historial } from '../historial';

@Component({
  selector: 'app-historial-list',
  templateUrl: './historial-list.component.html',
  styleUrls: ['./historial-list.component.css'],
  imports: [ReactiveFormsModule],
})
export class HistorialListComponent implements OnInit {
  historialFiltrado!: Historial;

  // Variables para almacenar los valores de los inputs
  idPaciente= new FormControl('');
  resultados: any[] = [];

  constructor(private historialService: HistorialService) { }

  ngOnInit() {
  }

  lookfor(){
    // Obtener los valores de los inputs
    const idPacienteValue = this.idPaciente.value!;

    this.historialService.getHistorial(idPacienteValue).subscribe((historial) => {
      this.historialFiltrado = historial;
    });
  }
}
