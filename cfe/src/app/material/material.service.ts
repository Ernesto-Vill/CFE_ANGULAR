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

  getMaterial(): Observable<Material[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Material[])
    );
}
}
