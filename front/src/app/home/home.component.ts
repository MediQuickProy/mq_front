import { Component, OnInit } from '@angular/core';
import { NavbarModule } from '../recurrent-modules/navbar/navbar.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    NavbarModule
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
