import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '../model/curso';

// ME ESTÁ DICIENDO QUE ÉSTE SERVICIO LO VOY A TENER DISPONIBLE EN TODA MI APP
// PARA INYECTARLO COMO UNA DEPENDENCIA EN CUALQUIER COMPONENTE Q LO NECESITE
@Injectable({
  providedIn: 'root'
})
export class CursoService {

  // URL="http://localhost:8080/curso/"
  URL="appcursosrailway-production.up.railway.app/curso"

  constructor(private httpClient: HttpClient) { }

  //crear
  public save(curso: Curso): Observable<any>{
    return this.httpClient.post<any>(this.URL+'create', curso);
  }

  //leer
  public list(): Observable<Curso[]> {
    return this.httpClient.get<Curso[]>(this.URL + 'list');
  }

  public getOne(id: number): Observable<Curso>{
    return this.httpClient.get<Curso>(this.URL + `getOne/${id}`);
  }

  //eliminar
  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }

  //actualizar
  public update(id: number, curso: Curso):Observable<any>{
    return this.httpClient.put<any>(this.URL+`update/${id}`, curso);
  }

}
