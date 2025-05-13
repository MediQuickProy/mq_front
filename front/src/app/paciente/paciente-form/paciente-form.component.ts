import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paciente-form',
  templateUrl: './paciente-form.component.html',
  styleUrls: ['./paciente-form.component.css'],
  imports: [ReactiveFormsModule,
    CommonModule
  ],
})
export class PacienteFormComponent implements OnInit {
  nombre = new FormControl('');
  documento = new FormControl('');
  fechaNacimiento = new FormControl('');
  sexo = new FormControl('');
  
  showModal = false;


  constructor() { }

  ngOnInit() {
  }

  send(){
    this.showModal = true;
  }

  closeModal(){
    this.showModal = false;
  }
}
