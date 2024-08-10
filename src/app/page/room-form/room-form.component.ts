import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RoomService } from '../../services/room.service';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-form',
  templateUrl: './room-form.component.html',
  styleUrl: './room-form.component.scss',
})
export class RoomFormComponent implements OnInit {
  roomForm: any;
  rooms: any[] = [];
  users: any[] = [];
  checkedUsers: any[] = [];
  displayUsers: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private roomService: RoomService,
    private userService: UsersService,
    private router: Router
  ) {}

  searchUser(event: any) {
    this.displayUsers = this.users.filter((user) => {
      return user.name.toLowerCase().includes(event.target.value.toLowerCase());
    });
  }
  resetAll(){
    window.location.reload();
  }
  checkUser(event: any) {
    if (event.target.checked) {
      this.checkedUsers.push(event.target.value);
    } else {
      this.checkedUsers = this.checkedUsers.filter(
        (user) => user !== event.target.value
      );
    }
  }

  ngOnInit(): void {
    this.roomForm = this.formBuilder.group({
      roomid: [''],
      time: [''],
      description: [''],
      userid:this.formBuilder.array([])
    });

    this.roomService.getRooms().subscribe({
      next: (res: any) => {
        console.log(res);
        this.rooms = res;
      },
      error: (err: any) => {
        console.log(err);
        alert(err.error.message);
      },
    });

    this.userService.getUsers().subscribe({
      next: (res: any) => {
        this.users = res;
        this.displayUsers = res;
        console.log(this.users);
      },
      error: (err: any) => {
        console.log(err);
        alert(err.error.message);
      },
    });
  }

  onSubmit() {
    if (this.roomForm.invalid) {
      alert('Please fill all required fields');
    } else {
      this.roomService.createBooking({...this.roomForm.value, userid: this.checkedUsers}).subscribe({
        next: (res: any) => {
          console.log(res);
          this.router.navigate(['/booking/success']);
         
        },
        error: (err: any) => {
          console.log(err);
          alert(err.error.message);
          window.location.reload();
        },
      });
    }
  }
}
