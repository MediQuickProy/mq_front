import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PacienteService } from '../paciente.service';
import { Paciente } from '../paciente';

@Component({
  selector: 'app-paciente-form',
  templateUrl: './paciente-form.component.html',
  styleUrls: ['./paciente-form.component.css'],
  imports: [ReactiveFormsModule,
    CommonModule
  ],
})
export class PacienteFormComponent implements OnInit {
  name = new FormControl('');
  document = new FormControl('');
  born_date = new FormControl();
  sexo = new FormControl('');
  
  showModal = false;
  
  constructor(private pacienteService: PacienteService) { }

  ngOnInit() {
  }

  send(){
    // Obtener los valores de los inputs
    const nombreValue = this.name.value!;
    const documentoValue = this.document.value!;
    const fechaNacimientoValue = this.born_date.value!;
    const sexoValue = this.sexo.value!;
    // Validar los valores
    if (nombreValue === '' || documentoValue === '' || fechaNacimientoValue === '' || sexoValue === '') {
      alert('Por favor, complete todos los campos.');
    } else {
      // Aquí puedes realizar la lógica para enviar los datos al backend
      const paciente = new Paciente("", nombreValue, documentoValue, fechaNacimientoValue, sexoValue);

      this.pacienteService.registrarPaciente(paciente).subscribe(response => {
        console.log('Paciente creado:', response);
      }, error => {
        console.error('Error al crear el paciente:', error);
      });
      this.showModal = true;
      // Reiniciar los campos del formulario
      this.name.reset();
      this.document.reset();
      this.born_date.reset();
      this.sexo.reset();
    }
  }

  closeModal(){
    this.showModal = false;
  }
}
