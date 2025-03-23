import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { LogoModule } from '../logo/logo.module';

@NgModule({
  imports: [
    CommonModule,
    NavbarComponent,
    LogoModule
  ],
  declarations: [],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
