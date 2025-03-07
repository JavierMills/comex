import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GuardarSolicitud } from '../models/GuardarSolicitud';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SolicitudAccesoService {

  constructor( private http: HttpClient) { }

}
