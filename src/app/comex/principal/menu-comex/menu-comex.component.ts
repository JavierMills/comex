import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosBuc, Menu } from 'src/app/models/Menu';
import { DatosUsuarioService } from 'src/app/services/datos-usuario.service';

@Component({
  selector: 'app-menu-comex',
  templateUrl: './menu-comex.component.html',
  styleUrls: ['./menu-comex.component.scss']
})
export class MenuComexComponent implements OnInit {

  public listaMenus: Menu[] | undefined;
  public datosConexion!: DatosBuc | undefined;
  public datosmodal :any;



  constructor( private datosUsuarioService: DatosUsuarioService, private router: Router ) { }

  ngOnInit(): void {
    this.obtenerMenu();
    this.datosmodal={

    }

  }

 obtenerMenu(){
    this.listaMenus = this.datosUsuarioService.leerMenu();
  }

  public cerrarSesion(){
    this.datosUsuarioService.borrarDatosUsuario();
    this.router.navigate(['/login']);
  }
  menuIcono(icono:string){
    return `../../../../assets/Images/${icono}`;
  }

  public exportar( nombre:string){
    if( nombre === 'Descargar Formato' ){
      return false
    }else{
        return false;
    }
  }

}
