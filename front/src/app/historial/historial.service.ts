import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Historial } from './historial';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {
  private apiUrl: string = environment.baseUrl + 'summary/summary/';

  constructor(private http: HttpClient) { }

  getHistorial(idPaciente: string): Observable<Historial>{
      return this.http.get<Historial>(this.apiUrl + idPaciente);
  }

  getSummary(idPaciente: string, historial: File): Observable<Historial>{
    const formData = new FormData();
    formData.append('file', historial);
    formData.append('paciente_id', idPaciente);
    return this.http.post<Historial>(this.apiUrl, formData);
  }

}
