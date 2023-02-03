import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [
  ]
})
export class UsuariosComponent implements OnInit {

  public userName:any;
  public userID:number;
  public rol:string;
  public totalUsuarios: number =0;
  public listUsers=[]
  public emailPra;
  constructor(
    private route:ActivatedRoute,
    private userSRV:UsuarioService
    ) {   }
  ngOnInit(): void {

    this.route.queryParams.subscribe(params=>{
      this.userName = params['userName'];
      this.userID = params['id_user'];
      this.rol = params['rol'];

    })
    this.loadUsers();  }

  loadUsers(){
    this.userSRV.getUsers().subscribe((resp:any)=>{
      this.listUsers = resp.users;
      this.totalUsuarios = this.listUsers.length;
    })
  }

  actualizar(id:any,username:any,email:any,pass:any,rol:any){
    if(id != '' && username != '' && email != '' && pass != '' && rol != ''){
      this.userSRV.updateUser(id,username,email,pass,rol).subscribe((resp:any)=>{
        console.log(resp);
        this.loadUsers();
      })
    }


  }
}
