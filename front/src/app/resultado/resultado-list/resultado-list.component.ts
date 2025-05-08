import { Component, OnInit } from '@angular/core';
import { ResultadoService } from '../resultado.service';
import { Resultado } from '../resultado';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-resultado-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './resultado-list.component.html',
  styleUrls: ['./resultado-list.component.css']
})
export class ResultadoListComponent implements OnInit {
  idResultado: string = '';
  idExamen: string = '';
  resultados: Resultado[] = [];
  resultadosFiltrados: Resultado[] = [];

  constructor(private resultadoService: ResultadoService) {}

  ngOnInit(): void {
    this.resultadoService.obtenerResultados().subscribe(data => {
      this.resultados = data;
      this.resultadosFiltrados = data;
    });
  }

  lookfor(): void {
    this.resultadosFiltrados = this.resultados.filter(resultado => {
      const idMatch = this.idResultado ? resultado.id.toString() === this.idResultado : true;
      const examenMatch = this.idExamen ? resultado.examen?.toString() === this.idExamen : true;
      return idMatch && examenMatch;
    });
  }

  trackById(index: number, item: Resultado): number {
    return item.id;
  }
}
