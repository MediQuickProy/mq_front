import { Component, OnInit } from '@angular/core';
import { LogoComponent } from '../recurrent-modules/logo/logo.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
  imports: [LogoComponent, RouterModule]
})
export class LogInComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
