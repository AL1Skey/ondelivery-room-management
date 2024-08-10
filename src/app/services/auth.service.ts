import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl:string = "http://localhost:3000"; 
  constructor(private http: HttpClient) { }

  login(obj:any){
    return this.http.post(`${this.baseUrl}/login`, obj);
  }
}
