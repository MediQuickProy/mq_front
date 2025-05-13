import { Component, OnInit } from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms'
import { Examen } from '../examen';
import { ExamenService } from '../examen.service';
import { ExamenDetailComponent } from '../examen-detail/examen-detail.component';

@Component({
  selector: 'app-examen-list',
  templateUrl: './examen-list.component.html',
  styleUrls: ['./examen-list.component.css'],
  imports: [ReactiveFormsModule,
    ExamenDetailComponent
  ],
})
export class ExamenListComponent implements OnInit {
  examenesFiltrados: Examen[] = [];
  selected: Boolean = false;
  selectedExamen!: Examen;

  // Variables para almacenar los valores de los inputs
  idPaciente= new FormControl('');
  resultados: any[] = [];

  constructor(private examenService: ExamenService) { }

  ngOnInit() {

  }

  lookfor(){
    const idPaciente = this.idPaciente.value!;
    if (idPaciente === '') {
      this.examenesFiltrados = [];
    } else {
      this.examenService.getExamen(idPaciente).subscribe((examenes) => {
        this.examenesFiltrados = examenes;
      });
    }
  }

  onSelected(examen: Examen): void {
    this.selected = true;
    this.selectedExamen = examen;
  }
}
