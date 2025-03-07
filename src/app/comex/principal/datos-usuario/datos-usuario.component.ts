import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/InfoUsuarios';
import { Perfil } from 'src/app/models/Perfil';
import { DatosUsuarioService } from 'src/app/services/datos-usuario.service';

@Component({
  selector: 'app-datos-usuario',
  templateUrl: './datos-usuario.component.html',
  styleUrls: ['./datos-usuario.component.scss']
})
export class DatosUsuarioComponent implements OnInit {

  public datosUsuario: Usuario | undefined;
  public perfil : Perfil | undefined;
  public fecha: Date = new Date();

  constructor( private datosUsuarioServicio: DatosUsuarioService,
    private router: Router
  ) { }

  

  ngOnInit(): void {
    this.datosUsuario = this.datosUsuarioServicio.obtenerDatosUsuarioLogeado();
    this.perfil = this.datosUsuarioServicio.obtenerPerfilSeleccionado();

    
  }

}
