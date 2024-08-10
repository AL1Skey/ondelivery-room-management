import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrl: './room-detail.component.scss'
})
export class RoomDetailComponent implements OnInit {
  id:string|null = null;
  room:any = {};

  constructor(private route: ActivatedRoute,private roomService:RoomService) {}

  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id');
    if(!this.id){
      alert("Invalid Room ID");
    }
    else{
      this.roomService.getBookingDetail(this.id).subscribe({
        next:(res:any)=>{
          console.log(res);
          res.booking.time = new Date(res.booking.time).toDateString()+" "+new Date(res.booking.time).toLocaleTimeString();
          this.room = res;
        },
        error:(err:any)=>{
          console.log(err);
          alert(err.error.message);
        }
      })
    }
  }
}
