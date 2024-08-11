import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoomService implements OnInit{
  baseUrl:string = "http://localhost:3000"; 
  token:string|null = localStorage.getItem('token')||null;
  
  constructor(private http: HttpClient, private router:Router) { }

  // Room
  getRooms(){
    return this.http.get(`${this.baseUrl}/rooms`, {headers:{Authorization:`Bearer ${this.token}`}});
  }

  getRoomsOverview(){
    
    return this.http.get(`${this.baseUrl}/rooms/overview`);
  }

  // Booking
  getBooking(){
    return this.http.get(`${this.baseUrl}/bookings`, {headers:{Authorization:`Bearer ${this.token}`}});
  }
  getBookingDetail(id:string){
    return this.http.get(`${this.baseUrl}/bookings/${id}`, {headers:{Authorization:`Bearer ${this.token}`}});
  }
  createBooking(data:any){
    return this.http.post(`${this.baseUrl}/bookings`, data, {headers:{Authorization:`Bearer ${this.token}`}});
  }

  ngOnInit(){
    if(!this.token){
      this.router.navigate(['/login']);
    }
  }
  
}
