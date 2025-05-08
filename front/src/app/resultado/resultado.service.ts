import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resultado } from './resultado';

@Injectable({
  providedIn: 'root'
})
export class ResultadoService {
  //private apiUrl = 'http://10.128.0.5:8080/resultado/'; // IP de la VM backend
  // SOLO PARA PRUEBAS LOCALES EN TU MÁQUINA
  //private apiUrl = 'http://35.223.99.180:8080/resultado/';
  

  private apiUrl = 'http://34.59.118.140:8080/resultado/';
  constructor(private http: HttpClient) {}

  obtenerResultados(): Observable<Resultado[]> {
    return this.http.get<Resultado[]>(this.apiUrl);
  }
}
