import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in.component';
import { LogInRoutes } from './log-in.routing';

@NgModule({
  imports: [
    CommonModule,
    LogInComponent,
    LogInRoutes
  ],
  declarations: [],
  exports: [
    LogInComponent
  ]
})
export class LogInModule { }
