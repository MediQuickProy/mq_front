import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from '../recurrent-modules/navbar/navbar.module';
import { ResultadoRoutes } from './resultado.routing';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    NavbarModule,
    ResultadoRoutes
  ],
  exports: []
})
export class ResultadoModule {}
