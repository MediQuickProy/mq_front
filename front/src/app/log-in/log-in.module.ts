import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in.component';
import { LogInRoutes } from './log-in.routing';
import { LogoModule } from '../recurrent-modules/logo/logo.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    LogInComponent,
    LogoModule,
    RouterModule,
    LogInRoutes
  ],
  declarations: [],
  exports: [
    LogInComponent
  ]
})
export class LogInModule { }
