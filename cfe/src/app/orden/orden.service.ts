import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Orden } from './orden';

@Injectable({
  providedIn: 'root'
})

export class OrdenService {

  private urlEndPoint: string = 'http://localhost:8080/api/orden';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getOrdenes(): Observable<Orden[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Orden[])
    );
  }
 create(orden: Orden) : Observable<Orden> {
    return this.http.post<Orden>(this.urlEndPoint, orden, {headers: this.httpHeaders})
  }

  getOrden(id): Observable<Orden>{
    return this.http.get<Orden>(`${this.urlEndPoint}/${id}`)
  }

  update(orden: Orden): Observable<Orden>{
    return this.http.put<Orden>(`${this.urlEndPoint}/${orden.idOrd}`, orden, {headers: this.httpHeaders})
  }

  delete(id:string): Observable<Orden>{
    return this.http.delete<Orden>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }
}
