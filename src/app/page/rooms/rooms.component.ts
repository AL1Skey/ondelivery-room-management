import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../services/room.service';
import { HttpClient } from '@angular/common/http';


export interface RoomsElement {
  room: string;
  employee: number;
  description: string;
}

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
/**
 * @title Basic use of `<table mat-table>`
 */
export class RoomsComponent implements OnInit {
  displayedColumns: string[] = ['room', 'employee', 'description'];
  rooms: any[] = [];

  constructor(private roomService: RoomService, private httpClient: HttpClient){}

  
  ngOnInit(): void {
    this.roomService.getBooking().subscribe({
      next:(res:any)=>{
        this.rooms = res;
        console.log(res);
      },
      error:(err:any)=>{
        console.log(err);
        alert(err.error.message);
      }
    })
  }
}
