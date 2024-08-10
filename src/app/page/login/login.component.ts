import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

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
  constructor(private auth: AuthService, private router:Router) { }

  onLogin(){
    this.auth.login(this.loginObj).subscribe({
      next: (res:any)=>{
        console.log(res);
        if(res.access_token){
          localStorage.setItem('token', res.access_token);
          localStorage.setItem('name', res.name);
          localStorage.setItem('role', res.role);
          localStorage.setItem('image', res.image);
          console.log(res);
          this.router.navigate(['/dashboard']);
        }
        else{
          alert(res.message);
        }
      },
      error: (err:any)=>{
        alert(err.error.message);
      }
    })
  }

}
