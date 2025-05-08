import { Component, OnInit } from '@angular/core';
import { ResultadoService } from './resultado.service';
import { Resultado } from './resultado';
import { NavbarComponent } from "../recurrent-modules/navbar/navbar.component";
import { ResultadoListComponent } from "./resultado-list/resultado-list.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resultado',
  standalone: true,
  imports: [NavbarComponent, ResultadoListComponent, FormsModule, CommonModule],
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
  resultados: Resultado[] = [];
  resultadosFiltrados: Resultado[] = [];  // ✅ necesario para el *ngFor
  idResultado: string = '';
  idExamen: string = '';

  constructor(private resultadoService: ResultadoService) {}

  ngOnInit() {
    this.obtenerResultados();
  }

  obtenerResultados() {
    this.resultadoService.obtenerResultados().subscribe(data => {
      this.resultados = data;
      this.resultadosFiltrados = data; // ✅ inicializar la lista a mostrar
    });
  }

  lookfor() {
    const id = this.idResultado.trim();
    const examen = this.idExamen.trim();

    this.resultadosFiltrados = this.resultados.filter(r => {
      return (!id || r.id.toString() === id) &&
             (!examen || r.examen?.toString() === examen);
    });
  }

  trackById(index: number, item: Resultado) {
    return item.id;
  }
}
