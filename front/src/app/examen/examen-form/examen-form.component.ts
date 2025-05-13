import { Component, OnInit } from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms'
import { ExamenService } from '../examen.service';
import { Examen } from '../examen';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-examen-form',
  templateUrl: './examen-form.component.html',
  styleUrls: ['./examen-form.component.css'],
  imports: [ReactiveFormsModule,
    CommonModule
  ],
})
export class ExamenFormComponent implements OnInit {
   idPaciente= new FormControl('');
   file = new FormControl<File | null>(null);
   isLoading = false;

   examenResultado!: Examen;
    showModal = false;

  constructor(private examenService: ExamenService) { }

  ngOnInit() {
  }

  predict(){
    this.isLoading = !this.isLoading;
    const idPaciente = this.idPaciente.value!;
    const file = this.file.value!;

    this.examenService.makePrediction(idPaciente, file).subscribe((examen) => {
      this.examenResultado = examen;
      this.isLoading = false;
      this.showModal = true;
    });

    this.idPaciente.reset();
    this.file.reset();
  }

  onFileSelected(event: Event): void {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length > 0) {
    this.file.setValue(input.files[0]);
    }
  }

  closeModal(){
    this.showModal = false;
  }
}
