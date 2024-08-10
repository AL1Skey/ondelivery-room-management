import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl:string = "http://localhost:3000";
  constructor(private httpClient: HttpClient) { }

  getUsers(){
    return this.httpClient.get(`${this.baseUrl}/users`);
  }
}
