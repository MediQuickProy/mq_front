import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Examen } from './examen';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {
  private apiUrl: string = environment.baseUrl + 'predict/predict/';

  constructor(private http: HttpClient) { }

  getExamen(idPaciente: string): Observable<Examen[]>{
    return this.http.get<Examen[]>(this.apiUrl + idPaciente);
  }

  makePrediction(idPaciente: string, examen: File): Observable<Examen> {
    const formData = new FormData();
    formData.append('file', examen);
    formData.append('paciente_id', idPaciente);
    return this.http.post<Examen>(this.apiUrl, formData);
  }

}
