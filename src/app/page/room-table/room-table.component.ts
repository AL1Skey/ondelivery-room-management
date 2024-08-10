import { Component } from '@angular/core';
import { RoomService } from '../../services/room.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-room-table',
  templateUrl: './room-table.component.html',
  styleUrl: './room-table.component.scss'
})
export class RoomTableComponent {
  displayedColumns: string[] = ['room', 'employee', 'description'];
  rooms: any[] = [];

  constructor(private roomService: RoomService, private httpClient: HttpClient){}

  
  ngOnInit(): void {
    this.roomService.getBooking().subscribe({
      next:(res:any)=>{
        this.rooms = res.reverse().slice(0, 5);
        console.log(res);
      },
      error:(err:any)=>{
        console.log(err);
        alert(err.error.message);
      }
    })
  }
}
