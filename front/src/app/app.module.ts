import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicoModule } from './medico/medico.module';
import { HistorialModule } from './historial/historial.module';
import { EventoModule } from './evento/evento.module';
import { ExamenModule } from './examen/examen.module';
import { PacienteModule } from './paciente/paciente.module';
import { HomeModule } from './home/home.module';
import { LogInModule } from './log-in/log-in.module';

import { LogInRoutes } from './log-in/log-in.routing';
import { MedicoRoutes } from './medico/medico.routing';
import { PacienteRoutes } from './paciente/paciente.routing';
import { HistorialRoutes } from './historial/historial.routing';
import { ExamenRoutes } from './examen/examen.routing';
import { HomeRoutes } from './home/home.routing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MedicoModule,
    HistorialModule,
    EventoModule,
    ExamenModule,
    PacienteModule,
    HomeModule,
    LogInModule,
    LogInRoutes,
    MedicoRoutes,
    PacienteRoutes,
    HistorialRoutes,
    ExamenRoutes,
    HomeRoutes,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
