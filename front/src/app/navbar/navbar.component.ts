import { Component, OnInit } from '@angular/core';
import { LogoComponent } from "../logo/logo.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [LogoComponent]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
