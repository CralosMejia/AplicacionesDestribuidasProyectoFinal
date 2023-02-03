//Angular Modules
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'

//Created Modules
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

//Components
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

const routes:Routes=[

  //path:'/dashboard' PagesRouting
  //path:'/auth'AuthRouting
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'**',component:NopagefoundComponent}
];

@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports:[RouterModule],
  providers:[
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
})
export class AppRoutingModule { }
