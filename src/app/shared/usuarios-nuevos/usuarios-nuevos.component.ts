import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NotifierService } from 'angular-notifier';
import { Niveles } from 'src/app/models/Niveles';
import { Perfil } from 'src/app/models/Perfil';
import { SolicitudAccesoService } from 'src/app/services/solicitud-acceso.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios-nuevos',
  templateUrl: './usuarios-nuevos.component.html',
  styleUrls: ['./usuarios-nuevos.component.scss']
})
export class UsuariosNuevosComponent implements OnInit {
  

  @Input() entradaExpediente: Perfil[]=[];
  @Output() seleccionPerfil = new EventEmitter();

  public isValid: boolean = true;
  public seleccionado?: string;
  public perfiles: Niveles[] =[];
  public perfilSeleccionado!: number;
  public idSucursal: number=2;
  public idAplicativo: number = 1;
  private readonly notifier: NotifierService;
  public verOpciones: boolean = false;
  public forzarVisualizacion: boolean = false;

  



  constructor(
    private usuariosServices: UsuariosService,
    private formBuilder: FormBuilder,
    private activarModal: NgbActiveModal,
    notifierService: NotifierService,
    private solicitudesAccesoServices: SolicitudAccesoService
  ) { 
    this.notifier = notifierService;
  }



  public usuariosNuevosForm = this.formBuilder.group({
    nombre: ['', [Validators.required]],
    correo: ['', [Validators.required, Validators.email]],
    perfil: ['', [Validators.required]],
    exp: [String(this.entradaExpediente), [Validators.required,Validators.minLength(5), Validators.maxLength(8)],],
    extencion: ['', [Validators.required,Validators.minLength(3), Validators.maxLength(6)],],
  })

  ngOnInit(): void {
    this.usuariosNuevosForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]],
      perfil: ['', [Validators.required]],
      exp: [String(this.entradaExpediente), [Validators.required,Validators.minLength(5), Validators.maxLength(8)],],
      extencion: ['', [Validators.required,Validators.minLength(3), Validators.maxLength(6)],],
    });

    this.getPerfiles();
  }

  getPerfiles(){
    this.usuariosServices.getNiveles().subscribe((res) => {
      this.perfiles = res;
    })
  }

  solicitudAcesso(){
    this.perfilSeleccionado = Number(this.usuariosNuevosForm.get('perfil')?.value);

    //const objPeticion = this.paramsPOST(this.perfilSeleccionado);

  }

 public paramsPOST(id:number): any{

  if(this.usuariosNuevosForm.invalid){
    this.usuariosNuevosForm.markAllAsTouched();
    return {};
  }

  const objPeticion = {
    "nombre" : this.usuariosNuevosForm.get('nombre')?.value,
    "correo" : this.usuariosNuevosForm.get('correo')?.value,
    "expediente" : this.usuariosNuevosForm.get('expediente')?.value,
    "extencion" : this.usuariosNuevosForm.get('extencion')?.value,
    "idSucursal": this.idSucursal,
    "idPerfil": id,
    "idAplicativo": this.idAplicativo,
  };

  return objPeticion;
  
  }

 public campoInvalido(campo: string){
    return(
      this.usuariosNuevosForm.controls[campo].errors &&
      this.usuariosNuevosForm.controls[campo].touched
    )
  }


  public limpiar(){
    this.usuariosNuevosForm.reset();
  }

 public convertirMayuscula( campo: string){

  if(campo){
    campo = this.usuariosNuevosForm.value[campo].toUpperCase();
    return campo;
  }else{
    return;
  }
 }

public validateFormat(event:any){
  let llave;

  if(event.type === 'paste'){
    llave = event.clipboardData.getData('text/plain');
  }else{
    llave = event.keyCode;
    llave = String.fromCharCode(llave);
  }

  const pattern = /[0-9]\./;

  if(!pattern.test(llave)){
      event.returnValue = false;
      if(event.preventDefault){
        event.preventDefault();
      }
  }

 }

 cerrarModal(){
  this.activarModal.close();
 }
}
