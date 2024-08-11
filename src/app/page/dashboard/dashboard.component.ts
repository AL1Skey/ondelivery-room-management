import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../services/room.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  totalRooms: number = 0;
  occupiedRooms: number = 0;
  emptyRooms: number = 0;

  constructor(private roomService: RoomService,private router:Router) {}

  ngOnInit(): void {
    if(!localStorage.getItem('token')){
      this.router.navigate(['/login']);
    }
    this.roomService.getRoomsOverview().subscribe({
      next: (res: any) => {
        this.totalRooms = res.totalRooms;
        this.occupiedRooms = res.occupiedRooms;
        this.emptyRooms = res.emptyRooms;
      },
      error: (err: any) => {
        console.log(err, 'error in dashboard room service getRoomsOverview');
        alert(err.error.message);
      },
    });
  }
}
