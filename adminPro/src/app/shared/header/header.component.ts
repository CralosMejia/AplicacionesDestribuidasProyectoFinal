import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent   {

  // public imgUrl:String;
  // public usuario : Usuario;

  constructor(private usuarioService:UsuarioService,
              private router: Router
    ) {
    // this.imgUrl = usuarioService.usuario.imageURL;
    // this.usuario =usuarioService.usuario;
   }




}
