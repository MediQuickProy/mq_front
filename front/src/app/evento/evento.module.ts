import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventoComponent } from './evento.component';
import { NavbarModule } from '../recurrent-modules/navbar/navbar.module';
import { EventoRoutes } from './evento.routing';

@NgModule({
  imports: [
    CommonModule,
    EventoComponent,
    NavbarModule,
    EventoRoutes
  ],
  declarations: [],
  exports: [
    EventoComponent
  ]
})
export class EventoModule { }
