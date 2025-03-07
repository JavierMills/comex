import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfiguracionesService } from './configuraciones.service';
import { Observable } from 'rxjs';
import { Aplicativo } from '../models/Menu';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(
    private http: HttpClient,
    private configService: ConfiguracionesService
  ) {}

  //TODO: /* NO PODREMOS HACER DINAMICO EL MENU YA que NO QUE DEPENDEMOS DE UN BACKEN */
  // seteamos la url que vienen del archivo .json, -> cambiar nombre de las variables
  public urlAcceso = "http://localhost:3000";

  getMenu(nivel: number): Observable<Aplicativo[]> {
    console.log(nivel, 'nivel menu')
    const aplicacion = 1;
    const params = new HttpParams()
      .set('valNivelAcc', nivel)
      

    return this.http.get<Aplicativo[]>(`${this.urlAcceso}/menu`, {
      params,
    });
  }
}
