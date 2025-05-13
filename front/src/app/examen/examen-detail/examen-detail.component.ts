import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Examen } from '../examen';

@Component({
  selector: 'app-examen-detail',
  templateUrl: './examen-detail.component.html',
  styleUrls: ['./examen-detail.component.css']
})
export class ExamenDetailComponent implements OnInit {

  @Input() examenDetail!: Examen;

  constructor() { }

  ngOnInit() {
  }

}
