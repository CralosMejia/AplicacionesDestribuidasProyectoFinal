import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';


const base_url_login = environment.base_url_login;
const base_url_create_users = environment.base_url_create_users;
const base_url_get_users = environment.base_url_get_users;
const base_url_update_users = environment.base_url_update_users;




@Injectable({
  providedIn: 'root'
})
export class UsuarioService {



  constructor(
    private http: HttpClient,
    private router:Router,
    private ngZone:NgZone) { }


    login(user:any, pass:any){
      const url=`${base_url_login}?user=${user}&pass=${pass}`

      return this.http.get(url);
    }

    createuser(user:any){
      const url=`${base_url_create_users}/`

      return this.http.post(url,user);
    }

    getUsers(){
      const url=`${base_url_get_users}/`

      return this.http.get(url);
    }

    updateUser(id,username,email,pass,rol){
      const url=`${base_url_update_users}/`
      return this.http.put(url,{id,username,email,pass,rol});
    }




}
