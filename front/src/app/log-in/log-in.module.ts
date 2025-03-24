import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in.component';
import { LogInRoutes } from './log-in.routing';
import { LogoModule } from '../recurrent-modules/logo/logo.module';

@NgModule({
  imports: [
    CommonModule,
    LogInComponent,
    LogoModule,
    LogInRoutes
  ],
  declarations: [],
  exports: [
    LogInComponent
  ]
})
export class LogInModule { }
