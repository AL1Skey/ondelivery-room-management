import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{

  baseUrl:string = "http://localhost:3000"; 
  constructor(private http: HttpClient, private router:Router) { }

  login(obj:any){
    return this.http.post(`${this.baseUrl}/login`, obj);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if(localStorage.getItem('token')){
      return true;
    }
    else{
      this.router.navigate(['/login']);
      return false;
    }
  }
}
