import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent implements OnInit {

  @Input() filtros: any[] = [];
  @Input() opciones: any;
  @Output() lanzarBusqueda = new EventEmitter();
  @Output() emitirBusquedaFiltros = new EventEmitter();
  @Input() buscarPorId!: boolean;


  public filtroGeneral : FormGroup = new FormGroup({});
  public buscar = false;
  public isShow!: boolean | string;



  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    let fieldsCtrls : any= {};

    for( let filtro of this.filtros){
      fieldsCtrls[filtro.value] = new FormGroup(fieldsCtrls);
    }

  }


  emitirBusqueda(){
    this.isShow = true;
    this.lanzarBusqueda.emit( this.filtroGeneral.value);
  }

  limpiarCampos(){
    this.filtroGeneral.reset('');
  }

}
