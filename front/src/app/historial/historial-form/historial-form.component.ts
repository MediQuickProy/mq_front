import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historial-form',
  templateUrl: './historial-form.component.html',
  styleUrls: ['./historial-form.component.css']
})
export class HistorialFormComponent implements OnInit {
  isLoading = false;

  constructor() { }

  ngOnInit() {
  }

  proccess(){
    this.isLoading = !this.isLoading;
  }

}
