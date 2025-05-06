import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultadoComponent } from './resultado.component';
import { NavbarModule } from '../recurrent-modules/navbar/navbar.module';
import { ResultadoRoutes } from './resultado.routing';

@NgModule({
  imports: [
    CommonModule,
    ResultadoComponent,
    NavbarModule,
    ResultadoRoutes
     
  ],
  declarations: [],
    exports: [
      ResultadoComponent
    ]
})
export class ResultadoModule { }
