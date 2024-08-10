import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  menuItems:any[] = [{
    icon:'home',
    label:'Dashboard',
    link:'/dashboard'
  },{
    icon:'exit_to_app',
    label:'Room Management',
    link:'/rooms'
  }]
  username: string = localStorage.getItem('name')||"";
  role:string = localStorage.getItem('role')||"";
  image: string = localStorage.getItem('image')||"";

  checkRole(item:any):boolean{
    console.log(['super admin','admin','hr admin','head departement'].includes(this.role) && item.label === 'Room Management',item.label)
    return ['super admin','admin','hr admin','head departement','staff'].includes(this.role) && item.label === 'Room Management'
  }
  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('role');
    localStorage.removeItem('image');
  }

}
