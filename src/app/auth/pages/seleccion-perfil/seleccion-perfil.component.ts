import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import { Perfil } from 'src/app/models/Perfil';



@Component({
  selector: 'app-seleccion-perfil',
  templateUrl: './seleccion-perfil.component.html',
  styleUrls: ['./seleccion-perfil.component.scss']
})
export class SeleccionPerfilComponent implements OnInit {


  @Output() seleccionPerfil = new EventEmitter();
  @Input() perfiles: Perfil[]=[];

  public seleccionado?:   string;


  constructor( public activarModal:NgbActiveModal) { }

  ngOnInit(): void {
    
  }

  seleccion(){
    const perfilSeleccionado = this.perfiles.find(perfil => perfil.valNivAcc === this.seleccionado);
    
    this.seleccionPerfil.emit(perfilSeleccionado);

    console.log('emite', perfilSeleccionado)
    this.activarModal.close();
  }

}
