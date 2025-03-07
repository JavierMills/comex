import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Acceso, Usuario } from 'src/app/models/InfoUsuarios';
import { Menu } from 'src/app/models/Menu';
import { NivelAcceso } from 'src/app/models/NivelAcceso';
import { Perfil } from 'src/app/models/Perfil';
import { DatosUsuarioService } from 'src/app/services/datos-usuario.service';
import { MenuService } from 'src/app/services/menu.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { UsuariosNuevosComponent } from 'src/app/shared/usuarios-nuevos/usuarios-nuevos.component';
import { SeleccionPerfilComponent } from './seleccion-perfil/seleccion-perfil.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  public menuRespuesta: Menu[] = [];
  public mandarExpediente!: string;
 // public informacionUsuario: Usuario | undefined;
  public informacionUsuario: any;

  public perfilesDeUsuario: Acceso[]=[];
  public nivelAcceso!: NivelAcceso;
  public perfilArray: Perfil[] = [];
  public listaPerfiles: any[]=[];
  public seleccionado:number= 0;
  public closeResult: string = "";
  public catalogoDePerfiles: Acceso[]=[];





  constructor(
    private modalServicio: NgbModal,
    private fb: FormBuilder,
    private usuariosService: UsuariosService,
    private router: Router,
    private datosUsuarioService: DatosUsuarioService,
    private menuService: MenuService

  ) { }


public myForm = this.fb.group({
  usuario:['', [Validators.required]],
  contrasena:['', [Validators.required]],
})

  ngOnInit(): void {
    this.getPerfiles();

  }

  //obtenemos todos los perfiles cuando se inicia el componente,
  getPerfiles(){
    this.usuariosService.getNiveles().subscribe((res => {
      console.log('res', res)
      this.listaPerfiles = res;
    }))
  }

  validEntry(){
    const usuario = this.myForm.get("usuario")?.value;
    const contrasena = this.myForm.get("usuario")?.value;

    if(this.myForm.valid){
        this.usuariosService.getInfoUsuarios(usuario, contrasena).subscribe((res) => {
          this.informacionUsuario = res;
          console.log(res, 'res')
          this.perfilesDeUsuario = this.informacionUsuario[0].accesos;
          console.log(this.perfilesDeUsuario, 'accesos')
          this.myForm.reset();
          this.validacionPerfiles();
        },
      (error) => {
        // no hay usuarion con expediente
        this.mandarExpediente = this.myForm.get("usuario")?.value;
        const modalRef = this.modalServicio.open(UsuariosNuevosComponent, { size : 'lg'});
        modalRef.componentInstance.entradaExpediente = this.mandarExpediente;
        modalRef.componentInstance.seleccionPerfil.subscribe(( $e:Perfil) => {

        })
        this.myForm.reset();
      }
      )
    }else{
      console.log('login invalido')
    }
  }

  seleccionarPerfil(perfil:Perfil | undefined){

    if( perfil ){
      this.datosUsuarioService.actualizarDatosUsuarioLogeado(this.informacionUsuario[0], perfil);

      this.menuService.getMenu(Number(perfil.valNivAcc)).subscribe( res => {
        this.menuRespuesta = res[0].menus;
        console.log(this.menuRespuesta, 'menuRespuesta')
        this.datosUsuarioService.guardarMenu(this.menuRespuesta);
        this.redirigirPerfil(perfil);
        console.log(perfil, 'rrrrrrr')

      })
    }
  }

  private redirigirPerfil(perfil: Perfil){
    console.log('perfil redirec' , perfil)
    if(perfil.dscDescripcion === 'Admin'){
     this.router.navigate(['/admin']) 

    }else{
      this.router.navigate(['/comex']);
    }
  }



  validacionPerfiles(){
    if( this.informacionUsuario && this.informacionUsuario[0].accesos){

      this.catalogoDePerfiles = this.informacionUsuario[0].accesos;

      for( let perfil of this.catalogoDePerfiles){
          if( perfil === null){
              perfil = {
                valEstatus:0,
                fchAlta:null,
                valAutorizo:0,
                idAplicativoFk: 0,
                idNivelAcceso:1
              }
          }
      }

      this.mandarExpediente = this.informacionUsuario[0].dscExp;
      this.perfilArray=[];

      this.perfilesDeUsuario.forEach(perfil => {
        const perfilExistente =this.listaPerfiles.find( perfilEncontrado => 
          perfilEncontrado.valEstatus === 1 && perfilEncontrado?.valNivAcc == perfil.idNivelAcceso);

          if(perfilExistente && perfil.valEstatus){
              this.perfilArray.push(perfilExistente);
          }
      })

      if(this.perfilArray.length >= 1){
        const modalRef = this.modalServicio.open( SeleccionPerfilComponent);

        modalRef.componentInstance.perfiles = this.perfilArray;
        modalRef.componentInstance.seleccionPerfil.subscribe(($e:Perfil) => {

          console.log('emitodo', $e);
          const eleccion = this.seleccionarPerfil($e);
        })
      }else if (this.perfilArray.length  === 0){
        
        const modalRef = this.modalServicio.open(UsuariosNuevosComponent,{ size: 'lg'});
        modalRef.componentInstance.entradaExpediente = this.mandarExpediente;
        modalRef.componentInstance.seleccionPerfil.subscribe(($e:Perfil) => {
          const eleccion = this.seleccionarPerfil($e);
        })

      }

    }
  }



}
