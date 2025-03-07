import { Injectable } from '@angular/core';
import { Menu } from '../models/Menu';
import { DatosUsuario } from '../models/DatosUsuario';
import { Perfil } from '../models/Perfil';
import { Usuario } from '../models/InfoUsuarios';

@Injectable({
  providedIn: 'root'
})
export class DatosUsuarioService {

  public datos?: DatosUsuario;
  public listaDeMenus: Menu [] | undefined;

  private datosUsuario: Usuario | undefined;
  private perfilSeleccionado: Perfil | undefined;




  constructor() { 
    this.datosUsuario = undefined;
    this.perfilSeleccionado= undefined;
  }
  

  // metodo para obtener el menu del perfil de usuraio logeado 
  obtenerDatosUsuarioLogeado(): Usuario | undefined{
    const usr = JSON.parse( localStorage.getItem('usr') || "{}");
    if(usr.id){
      this.datosUsuario = usr;
    }else{
      this.datosUsuario = undefined;
    }
    return this.datosUsuario;
  }

    // metodo para obtener el menu del perfil de l usuario logeado
  leerMenu(){
    const menu = JSON.parse(localStorage.getItem('menu') || "[]");
    if(menu){
      this.listaDeMenus = menu;
    }else{
      this.listaDeMenus = undefined;
    }
    return this.listaDeMenus;
  }

  // metodo para guardar el menu del usuario logeado 
  guardarMenu(listasMenus: Menu[]){
    const menu = localStorage.setItem('menu', JSON.stringify(listasMenus))
  }

    // se optiene el perfil del usuario logeado 
  obtenerPerfilSeleccionado(): Perfil | undefined{
    const prf = JSON.parse( localStorage.getItem('prf') || "[]");

    if(prf.id){
      this.perfilSeleccionado = prf;
    }else{
      this.perfilSeleccionado = undefined;
    }
    return this.perfilSeleccionado;
  }

  // guardamos datos del usuario en el session storage 

  actualizarDatosUsuarioLogeado( datosUsuario: Usuario | undefined, perfilSeleccionado: Perfil | undefined, ){
    this.datosUsuario = datosUsuario;
    this.perfilSeleccionado = perfilSeleccionado;

    localStorage.setItem('usr', JSON.stringify(datosUsuario));
    localStorage.setItem('prf', JSON.stringify(perfilSeleccionado));

  }

  // metodo para cerrar sesion 

  public borrarDatosUsuario(){
    this.borrar();
  }


  private borrar(){
    this.datos = undefined;
    localStorage.removeItem('usr');
    localStorage.removeItem('prf');
    localStorage.removeItem('menu');

  }



}
