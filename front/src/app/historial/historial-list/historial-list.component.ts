import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  @Output() historialSelected = new EventEmitter<Historial>();

  // Variables para almacenar los valores de los inputs
  id_Paciente= new FormControl('');

  constructor(private historialService: HistorialService) { }

  ngOnInit() {
  }

  lookfor(){
    // Obtener los valores de los inputs
    const idPacienteValue = this.id_Paciente.value!;

    this.historialService.getHistorial(idPacienteValue).subscribe((historial) => {
      this.historialFiltrado = historial;
    });
  }

  selectedHistorial(historial: Historial) {
    this.historialFiltrado = historial;
    this.historialSelected.emit(historial);
  }

}
