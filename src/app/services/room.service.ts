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
    return this.http.get(`${this.baseUrl}/rooms`);
  }
  

  // Booking
  getBooking(){
    return this.http.get(`${this.baseUrl}/bookings`);
  }
  getBookingDetail(id:string){
    return this.http.get(`${this.baseUrl}/bookings/${id}`);
  }
  createBooking(data:any){
    return this.http.post(`${this.baseUrl}/bookings`, data);
  }

  ngOnInit(){
    if(!this.token){
      this.router.navigate(['/login']);
    }
  }
  
}
