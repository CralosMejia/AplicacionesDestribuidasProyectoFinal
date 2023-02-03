import { Component,AfterViewInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2'

declare const google:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'
  ]
})
export class LoginComponent{



  public loginForm = this.fb.group({
    user: [localStorage.getItem('user') || '' ,[Validators.required]],
    pass: ['',[Validators.required]],
  });


  constructor(private router:Router,
              private fb: FormBuilder,
              private usuarioService:UsuarioService,
              private ngZone:NgZone
    ) { }



  login(){

    if(!this.loginForm.invalid){
      const username=this.loginForm.controls['user'].value
      const password=this.loginForm.controls['pass'].value

      this.usuarioService.login(username,password).subscribe((resp:any)=>{
        // console.log(resp[0]);
        localStorage.setItem('validation','1')
        this.router.navigate(['/dashboard/usuarios'],{queryParams: {userName:resp[0].username,id_user:resp[0].id,rol:resp[0].rol}});
      },error=>{
        Swal.fire('No existe un usuario registrado con esas credenciales.')
      });

    }


  }



}
