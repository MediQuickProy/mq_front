import { Component, OnInit } from '@angular/core';
import { HistorialService } from '../historial.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Historial } from '../historial';

@Component({
  selector: 'app-historial-form',
  templateUrl: './historial-form.component.html',
  styleUrls: ['./historial-form.component.css'],
  imports: [ReactiveFormsModule],
})
export class HistorialFormComponent implements OnInit {
  idPaciente= new FormControl('');
  file = new FormControl<File | null>(null);
  isLoading = false;

  historialResultado!: Historial;

  constructor(private historialService: HistorialService) { }

  ngOnInit() {
  }

  proccess(){
    this.isLoading = !this.isLoading;
    const idPaciente = this.idPaciente.value!;
    const file = this.file.value!;

    this.historialService.getSummary(idPaciente, file).subscribe((historial) => {
      this.historialResultado = historial;
      this.isLoading = false;
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
}
