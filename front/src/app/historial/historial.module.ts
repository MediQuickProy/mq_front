import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistorialComponent } from './historial.component';
import { NavbarModule } from '../recurrent-modules/navbar/navbar.module';
import { HistorialRoutes } from './historial.routing';

@NgModule({
  imports: [
    CommonModule,
    HistorialComponent,
    NavbarModule,
    HistorialRoutes
  ],
  declarations: [],
  exports: [
    HistorialComponent
  ]
})
export class HistorialModule { }
