import { Component, OnInit } from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms'

@Component({
  selector: 'app-examen-form',
  templateUrl: './examen-form.component.html',
  styleUrls: ['./examen-form.component.css'],
  imports: [ReactiveFormsModule],
})
export class ExamenFormComponent implements OnInit {
   idPaciente= new FormControl('');

  constructor() { }

  ngOnInit() {
  }

  predict(){

  }

}
