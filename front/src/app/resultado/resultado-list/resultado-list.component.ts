import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultado-list',
  templateUrl: './resultado-list.component.html',
  styleUrls: ['./resultado-list.component.css']
})
export class ResultadoListComponent implements OnInit {
  resultados=[
    {"id": 201, "fecha": "2024-03-08","respuesta":"tienes epilepsia","examen":null},
  
]
  constructor() { }

  ngOnInit() {
  }
  lookfor(){
  }

}
