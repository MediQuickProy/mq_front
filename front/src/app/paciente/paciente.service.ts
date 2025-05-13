import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Paciente } from './paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private apiUrl: string = environment.baseUrl + 'pacientes/';

  constructor(private http: HttpClient) { }

  getPaciente(documentoPaciente: string): Observable<Paciente>{
    return this.http.get<Paciente>(this.apiUrl + "documento/" + documentoPaciente);
  }

  registrarPaciente(paciente: Paciente): Observable<Paciente> {
    return this.http.post<Paciente>(this.apiUrl, paciente);
  }
}
