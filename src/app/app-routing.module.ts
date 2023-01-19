import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pagina1Component } from './componentes/pagina1/pagina1.component';
import { Pagina2Component } from './componentes/pagina2/pagina2.component';
import { GuardiaGuard } from './tanke/guardia.guard';

const routes: Routes = [
  {
    path:'Pagina1',
    canActivate: [GuardiaGuard],
    component:Pagina1Component,

  },
  {
    path:'Pagina2',
    component:Pagina2Component,

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
