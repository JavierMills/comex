import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { FiltroAutomaticasComponent } from '../shared/filtro-solicitudes/filtro-automaticas/filtro-automaticas.component';


const routes: Routes = [
  {
    path:'',
    component: PrincipalComponent,
    children:[
      {
        path: 'automaticas',
        component:FiltroAutomaticasComponent
      },
      {
        path: '**',
        redirectTo: 'automaticas'
      }
    ]
  }
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class ComexRoutingModule { }
