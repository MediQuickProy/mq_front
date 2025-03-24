import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicoComponent } from './medico.component';
import { NavbarModule } from '../recurrent-modules/navbar/navbar.module';
import { MedicoRoutes } from './medico.routing';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  imports: [
    CommonModule,
    MedicoComponent,
    SignUpComponent,
    NavbarModule,
    MedicoRoutes
  ],
  declarations: [],
  exports: [
    MedicoComponent,
    SignUpComponent
  ]
})
export class MedicoModule { }
