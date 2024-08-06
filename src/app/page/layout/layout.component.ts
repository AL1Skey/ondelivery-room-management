import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  menuItems:any[] = [{
    icon:'home',
    label:'Dashboard'
  },{
    icon:'exit_to_app',
    label:'Room Management'
  }]

}
