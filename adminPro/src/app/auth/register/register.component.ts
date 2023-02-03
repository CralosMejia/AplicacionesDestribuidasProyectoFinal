import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2'

import { UsuarioService } from 'src/app/services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'
  ]
})
export class RegisterComponent implements OnInit {

  public crearCliente: FormGroup;

  constructor( private fb: FormBuilder,
               private usuarioService:UsuarioService,
               private router:Router,
               private route:ActivatedRoute,
    ) { }


  ngOnInit(): void {

    this.crearCliente= this.fb.group({
      username:['',[Validators.required]],
      email:['',[Validators.required]],
      pass:['',[Validators.required]],
    })

  }

  crearApp(){
    if(!this.crearCliente.invalid){
      this.usuarioService.createuser(this.crearCliente.value).subscribe((resp:any) =>{

        this.router.navigate(['/dashboard/usuarios'],{queryParams: {userName:resp.user.username,id_user:resp.user.id,rol:resp.user.rol}});
      })
    }else{
      Swal.fire('Llene todos los campos')
    }
  }

}
