import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionesService {

  _configuraciones: any = {};
  
  constructor( private http: HttpClient) { }

  cargarConfiguracion(){
    return () => this.http.get('/Users/javiermills/Documents/Angular/Comex/Comex/src/assets/config.json').pipe(
      tap(config => {
        this._configuraciones = config;
      })
    )
  }

  public get configuracion(): any {
    return this._configuraciones;
  }
}
