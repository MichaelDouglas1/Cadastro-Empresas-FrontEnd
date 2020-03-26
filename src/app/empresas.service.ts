import { take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empresa } from './empresa.model';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {
  empresasUrl = 'http://localhost:8080/empresas';

  constructor(private http: HttpClient) { }

  
  listar(): Observable<any[]>{
    return this.http.get<Empresa[]>(`${this.empresasUrl}`);
  }

  remove(id){
    return this.http.delete(`${this.empresasUrl}/${id}`).pipe(take(1));
  }

  create(empresa){
    return this.http.post(`${this.empresasUrl}`,empresa).pipe(take(1));

  }
}
