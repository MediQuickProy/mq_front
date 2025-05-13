import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacienteComponent } from './paciente.component';
import { NavbarModule } from '../recurrent-modules/navbar/navbar.module';
import { PacienteRoutes } from './paciente.routing';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PacienteComponent,
    NavbarModule,
    PacienteRoutes,
    ReactiveFormsModule
  ],
  declarations: [],
  exports: [
    PacienteComponent
  ]
})
export class PacienteModule { }
