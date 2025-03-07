import { APP_INITIALIZER, LOCALE_ID, NgModule } from '@angular/core';

import LocalEsp from '@angular/common/locales/es-MX';

import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NotifierModule } from 'angular-notifier';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule, DatePipe, registerLocaleData } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserIdleModule } from 'angular-user-idle';
import { DataTablesModule } from 'angular-datatables';
import { AuthModule } from './auth/auth.module';
import { UsuariosNuevosComponent } from './shared/usuarios-nuevos/usuarios-nuevos.component';
import { SharedModule } from './shared/shared.module';
registerLocaleData( LocalEsp );

@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgbModule,
    AuthModule,
    DataTablesModule,
    FormsModule,
    SharedModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    NotifierModule,
    UserIdleModule.forRoot({ idle: 600, timeout: 10, ping: 10}),
  ],
  providers: [
    DatePipe,
    { provide: LOCALE_ID, useValue: 'es-MX'},
    // despues
    // { provide: HTTP_INTERCEPTORS, useClass:AutenticationInterceptor, multi: true},
    { provide: LOCALE_ID, useValue: 'es'},
    // { 
    //   provide: APP_INITIALIZER,
    //   multi: true,
    //   despues
    //   deps: [ConfiguracionesServices]
    //   useFactory: (configService:ConfiguracionesServices) => configService.cargarConfuguracion()
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
