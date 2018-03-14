import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Tarea } from '../models/tarea';
import { Routes } from '../routes';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TareaService {

	private tareasUrl = Routes.API_ENDPOINT + '/tareas';
	private tareas: Tarea[];
  private tarea: Tarea;

  constructor(
  	private http: HttpClient
  ) { }

  getTareas (): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(this.tareasUrl)
      .pipe(
        tap(tareas => console.log('Listado de tareas recibido con éxito.')),
        catchError(this.handleError('getTareas', []))
      );
  }

  addTarea (tarea: any): Observable<any> {
    return this.http.post(this.tareasUrl, tarea)
      .pipe(
        tap(tarea => console.log('Tarea creada con éxito.')),
        catchError(this.handleError('postTareas', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}
