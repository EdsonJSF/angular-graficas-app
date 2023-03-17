import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
    return this.http.get<Grafica>(`${this._baseURL}/grafica`);
  }

  getGraficaRXJS() {
    return this.getGrafica().pipe(
      map((data) => {
        const labels = Object.keys(data);
        const values = Object.values(data);
        return { labels, values };
      })
    );
  }
}
