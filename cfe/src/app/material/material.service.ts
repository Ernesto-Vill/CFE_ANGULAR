import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Material } from './material';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  private urlEndPoint: string = 'http://localhost:8080/api/material';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http: HttpClient) { }

  getMateriales(): Observable<Material[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Material[])
    );
}

create(material: Material) : Observable<Material> {
   return this.http.post<Material>(this.urlEndPoint, material, {headers: this.httpHeaders})
 }

 getMaterial(id): Observable<Material>{
   return this.http.get<Material>(`${this.urlEndPoint}/${id}`)
 }

 update(material: Material): Observable<Material>{
   return this.http.put<Material>(`${this.urlEndPoint}/${material.idMat}`, material, {headers: this.httpHeaders})
 }

 delete(id:number): Observable<Material>{
   return this.http.delete<Material>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
 }
}
