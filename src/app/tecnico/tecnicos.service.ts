import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Tecnicos } from './tecnico.module';

@Injectable({
  providedIn: 'root'
})
export class TecnicosService {

  public readonly tecnicosURLListarTodos = `${environment.tecnicosURLListarTodos}`;
  public readonly tecnicosURLfindNome = `${environment.tecnicosURLfindNome}`;

  constructor(private http: HttpClient) { }

  getTecnicos(): Observable<Tecnicos[]> {
    return this.http.get<Tecnicos[]>(this.tecnicosURLListarTodos);
  }

  getTecnicosNome(nome: string): Observable<any> {
    return this.http.get(`${this.tecnicosURLfindNome}${nome}`);
  }
}
