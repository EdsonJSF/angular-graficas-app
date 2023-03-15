import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

interface Grafica {
  facebook: number;
  youtube: number;
  whatsapp: number;
  'facebook-messenger': number;
  instagram: number;
}

@Injectable({
  providedIn: 'root',
})
export class GraficasService {
  private _baseURL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getGrafica(): Observable<Grafica> {
    return this.http
      .get<Grafica>(`${this._baseURL}/grafica`)
      .pipe(tap(console.log));
  }
}
