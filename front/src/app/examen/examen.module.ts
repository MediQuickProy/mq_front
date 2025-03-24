import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamenComponent } from './examen.component';
import { NavbarModule } from '../recurrent-modules/navbar/navbar.module';
import { ExamenRoutes } from './examen.routing';

@NgModule({
  imports: [
    CommonModule,
    ExamenComponent,
    NavbarModule,
    ExamenRoutes
  ],
  declarations: [],
  exports: [
    ExamenComponent
  ]
})
export class ExamenModule { }
