import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ConfiguracionesService } from './configuraciones.service';
import { Observable } from 'rxjs';
import { Usuario } from '../models/InfoUsuarios';



@Injectable({
  providedIn: 'root'
})
export class UsuariosService{

 

 

  // public urlUsuarios  = this.configService.configuracion.front.urls.urlBaseUsuario;
  public urlAcceso = "http://localhost:3000";

   public urlUsuarios  = "HOLA";
   public urlCatalogos = "hola";

  constructor(private http: HttpClient, private configService: ConfiguracionesService) { }

  getAplicativos(): Observable<any[]>{
    return this.http.get<any[]>(`${this.urlAcceso}/aplicativo`);
  }

  getNiveles(): Observable<any[]>{
    return this.http.get<any>(`${this.urlAcceso}/niveles`);
  }

  //http://localhost:3000/usuario?dscExp=Z420058

  getInfoUsuarios( expediente: string, contrasena: string): Observable<Usuario>{
    const params = new HttpParams()
      .set('dscExp', expediente)
    return this.http.get<Usuario>(`${this.urlAcceso}/usuario`, { params });
  }
}
