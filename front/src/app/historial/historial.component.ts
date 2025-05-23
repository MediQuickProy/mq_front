import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../recurrent-modules/navbar/navbar.component";
import { HistorialListComponent } from './historial-list/historial-list.component';
import { HistorialDetailComponent } from './historial-detail/historial-detail.component';
import { HistorialFormComponent } from './historial-form/historial-form.component';
import { Historial } from './historial';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css'],
  imports: [
    NavbarComponent,
    HistorialListComponent,
    HistorialDetailComponent,
    HistorialFormComponent
  ]
})
export class HistorialComponent implements OnInit {
  historialSeleccionado!: Historial;

  constructor() { }

  ngOnInit() {
  }

  mostrarDetalle(historial: Historial) {
    this.historialSeleccionado = historial;
  }
}
