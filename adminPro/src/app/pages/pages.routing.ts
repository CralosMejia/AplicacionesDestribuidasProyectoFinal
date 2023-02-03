import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'

import { PagesComponent } from './pages.component';

import { PerfilComponent } from './perfil/perfil.component';
import { UsuariosComponent } from './mantenimientos/usuarios/usuarios.component';




const routes:Routes=[
    {
      path: 'dashboard',component:PagesComponent,children:[
        {path:'perfil',component: PerfilComponent, data:{titulo:'Perfil'}},
        //rutas admin
        {path:'usuarios',component: UsuariosComponent, data:{titulo:'Usuarios'}},
      ]
    },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class PagesRoutingModule { }
