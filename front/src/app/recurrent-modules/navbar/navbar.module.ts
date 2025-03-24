import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { LogoModule } from '../logo/logo.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    NavbarComponent,
    LogoModule,
    RouterModule
  ],
  declarations: [],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
