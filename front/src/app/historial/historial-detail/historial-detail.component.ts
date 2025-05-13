import { Component, Input, OnInit } from '@angular/core';
import { Historial } from '../historial';

@Component({
  selector: 'app-historial-detail',
  templateUrl: './historial-detail.component.html',
  styleUrls: ['./historial-detail.component.css']
})
export class HistorialDetailComponent implements OnInit {
  @Input() historial!: Historial;

  constructor() { }

  ngOnInit() {
  }

}
