import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, DatePipe, registerLocaleData } from '@angular/common';
import { HeaderComponent } from './principal/header/header.component';
import { DatosUsuarioComponent } from './principal/datos-usuario/datos-usuario.component';
import { MenuComexComponent } from './principal/menu-comex/menu-comex.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { ComexRoutingModule } from './comex-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import localEs from '@angular/common/locales/es';
import { PrincipalComponent } from './principal/principal.component';

registerLocaleData(localEs);

@NgModule({
  declarations: [
    PrincipalComponent,
    HeaderComponent,
    DatosUsuarioComponent,
    MenuComexComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    FormsModule,
    ComexRoutingModule,
    RouterModule,
    SharedModule
  ],
  providers:[
    DatePipe,
    {
      provide:LOCALE_ID,
      useValue:"es",
    },
  ]
})
export class ComexModule { }
