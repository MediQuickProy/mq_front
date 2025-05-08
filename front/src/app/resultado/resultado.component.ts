import { Component } from '@angular/core';
import { ResultadoService } from './resultado.service';
import { Resultado } from './resultado';
import { NavbarComponent } from "../recurrent-modules/navbar/navbar.component";
import { ResultadoListComponent } from "./resultado-list/resultado-list.component";

@Component({
  selector: 'app-resultado',
  standalone: true,
  imports: [NavbarComponent, ResultadoListComponent],
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent {
  resultados: Resultado[] = [];
  idResultado: string = '';
  idExamen: string = '';

  constructor(private resultadoService: ResultadoService) {}

  ngOnInit() {
    this.obtenerResultados();
  }

  obtenerResultados() {
    this.resultadoService.obtenerResultados().subscribe(data => {
      this.resultados = data;
    });
  }

  lookfor() {
    const id = this.idResultado.trim();
    const examen = this.idExamen.trim();

    this.resultadoService.obtenerResultados().subscribe(data => {
      this.resultados = data.filter(r => {
        return (!id || r.id.toString() === id) &&
               (!examen || r.examen?.toString() === examen);
      });
    });
  }

  trackById(index: number, item: Resultado) {
    return item.id;
  }
}
