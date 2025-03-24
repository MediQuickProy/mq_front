import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacienteComponent } from './paciente.component';
import { NavbarModule } from '../recurrent-modules/navbar/navbar.module';
import { PacienteRoutes } from './paciente.routing';

@NgModule({
  imports: [
    CommonModule,
    PacienteComponent,
    NavbarModule,
    PacienteRoutes
  ],
  declarations: [],
  exports: [
    PacienteComponent
  ]
})
export class PacienteModule { }
