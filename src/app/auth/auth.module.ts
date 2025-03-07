import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login.component';
import { SeleccionPerfilComponent } from './pages/seleccion-perfil/seleccion-perfil.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';
import { AppModule } from '../app.module';





@NgModule({
  declarations: [LoginComponent, SeleccionPerfilComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    FormsModule,
    RouterModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    
   
  ],
  exports:[ LoginComponent]
})
export class AuthModule { }
