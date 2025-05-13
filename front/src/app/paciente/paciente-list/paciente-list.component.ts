import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { PacienteService } from '../paciente.service';
import { Paciente } from '../paciente';
import { PacienteDetailComponent } from '../paciente-detail/paciente-detail.component';

@Component({
  selector: 'app-paciente-list',
  templateUrl: './paciente-list.component.html',
  styleUrls: ['./paciente-list.component.css'],
  imports: [ReactiveFormsModule,
    PacienteDetailComponent
  ],
})
export class PacienteListComponent implements OnInit {
  docPaciente = new FormControl('');
  pacienteResultado!: Paciente;
  pacienteSelected!: Paciente;

  constructor(private pacienteService: PacienteService) { }

  ngOnInit() {
  }

  lookfor(){
    // Obtener los valores de los inputs
    const docPacienteValue = this.docPaciente.value!;

    if (docPacienteValue === '') {
      alert('Por favor, ingrese un número de documento.');
    } else {
      // Llamar al servicio para obtener el paciente
      this.pacienteService.getPaciente(docPacienteValue).subscribe((paciente) => {
        // Guardar el paciente en la variable resultados
        this.pacienteResultado = paciente;
      });
    }
  }

  selectPaciente(paciente: Paciente) {
    this.pacienteSelected = paciente;
  }

}
