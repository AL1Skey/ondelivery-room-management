import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  totalRooms:number = 0;
  occupiedRooms:number = 0;
  emptyRooms:number = 0;
}
