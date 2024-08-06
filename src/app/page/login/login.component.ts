import { Component } from '@angular/core';
import { RoomService } from '../../services/room.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginObj:any = {
    "username":"",
    "password":""
  }
  constructor(private roomService: RoomService, private router:Router) { }

  onLogin(){
    this.roomService.login(this.loginObj).subscribe((res:any)=>{
      if(res.result){
        localStorage.setItem('user',JSON.stringify(res.result))
        this.router.navigate(['/dashboard']);
      }
    },
    error=>{
      alert("Internal server error")
    })
  }

}
