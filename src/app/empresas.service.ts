import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {
  empresasUrl = 'http://localhost:8080/empresas';

  constructor(private http: HttpClient) { }

  
  listar(): Observable<any[]>{
    return this.http.get<any[]>(`${this.empresasUrl}`);
  }
}
