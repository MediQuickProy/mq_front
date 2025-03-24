import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavbarModule } from '../recurrent-modules/navbar/navbar.module';
import { HomeRoutes } from './home.routing';

@NgModule({
  imports: [
    CommonModule,
    HomeComponent,
    NavbarModule,
    HomeRoutes
  ],
  declarations: [],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
