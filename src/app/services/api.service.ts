import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from '../model/emplado';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8080/url'; 

  constructor(private http: HttpClient) {}

  getData(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(this.apiUrl);
  }

  postData(data: Empleado): Observable<Empleado[]> {
    return this.http.post<Empleado[]>(this.apiUrl, data);
  }

  putData(clave: string, data: Empleado): Observable<Empleado[]> {
    return this.http.put<Empleado[]>(`${this.apiUrl}/${clave}`, data);
  }

  deleteData(clave: string): Observable<Empleado[]> {
    return this.http.delete<Empleado[]>(`${this.apiUrl}/${clave}`);
  }
}

