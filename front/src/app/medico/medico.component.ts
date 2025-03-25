import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../recurrent-modules/navbar/navbar.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css'],
  imports: [
    NavbarComponent,
    SignUpComponent,
    ProfileComponent
]
})
export class MedicoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
