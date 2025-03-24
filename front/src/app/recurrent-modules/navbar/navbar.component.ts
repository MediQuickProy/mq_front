import { Component, OnInit } from '@angular/core';
import { LogoComponent } from "../logo/logo.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [
    LogoComponent,
    RouterModule
  ]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
