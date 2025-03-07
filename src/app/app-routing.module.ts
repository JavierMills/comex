import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'comex',
    loadChildren:() => import('./comex/comex.module').then( m => m.ComexModule)
  },
  {
    path:'',
    loadChildren:() => import('./auth/auth.module').then( m => m.AuthModule)
  },
  {
    path:'**',
    redirectTo:'comex'
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
