import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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

  constructor(private router:Router){}

  checkRole(item:any):boolean{
    
    return ['super admin','admin','hr admin','head departement','staff'].includes(this.role) && item.label === 'Room Management'
  }
  logout(){
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No, go back'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        localStorage.removeItem('role');
        localStorage.removeItem('image');
        Swal.fire(
          'Success!',
          'Logout Success.',
          'success'
        )
        this.router.navigate(['/login']);
      }
    })

    
  }

}
