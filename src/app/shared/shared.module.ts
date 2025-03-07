import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuariosNuevosComponent } from './usuarios-nuevos/usuarios-nuevos.component';
import { FiltroComponent } from './filtro/filtro.component';
import { FiltroAutomaticasComponent } from './filtro-solicitudes/filtro-automaticas/filtro-automaticas.component';



@NgModule({
  declarations: [
    UsuariosNuevosComponent,
    FiltroComponent,
    FiltroAutomaticasComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    Ng2SearchPipeModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    UsuariosNuevosComponent,
    FiltroComponent,
    FiltroAutomaticasComponent
  ]
})
export class SharedModule { }
