import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent  implements OnInit {

  public userName:any;
  public userID:number;
  public rol:string;

  constructor(private router:Router,private route:ActivatedRoute,) {

  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      this.userName = params['userName'];
      this.userID = params['id_user'];
      this.rol = params['rol'];
    })
  }

  logout(){
    this.router.navigate(['/login'],{queryParams: {}});
  }

}
