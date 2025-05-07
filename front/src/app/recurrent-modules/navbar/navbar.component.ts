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

  toggleMusic() {
    const audio = document.getElementById('backgroundMusic') as HTMLAudioElement;
  
    if (audio) {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    } else {
      console.error("El elemento de audio no se encontró.");
    }
  }

}
