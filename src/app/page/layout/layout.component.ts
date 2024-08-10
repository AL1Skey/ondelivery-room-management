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
  image: string = localStorage.getItem('image')||"";

}
