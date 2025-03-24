import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicoComponent } from './medico.component';
import { NavbarModule } from '../recurrent-modules/navbar/navbar.module';
import { MedicoRoutes } from './medico.routing';

@NgModule({
  imports: [
    CommonModule,
    MedicoComponent,
    NavbarModule,
    MedicoRoutes
  ],
  declarations: [],
  exports: [
    MedicoComponent
  ]
})
export class MedicoModule { }
