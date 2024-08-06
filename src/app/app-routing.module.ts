import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { LayoutComponent } from './page/layout/layout.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { RoomsComponent } from './page/rooms/rooms.component';
import { NewBookingComponent } from './page/new-booking/new-booking.component';
import { BookingListComponent } from './page/booking-list/booking-list.component';
import { BookingCalenderComponent } from './page/booking-calender/booking-calender.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  
  {
    path: '',
    component:LayoutComponent,
    children:[
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'rooms',
        component:RoomsComponent
      },
      {
        path:'newBooking',
        component:NewBookingComponent
      },
      {
        path:'bookings',
        component:BookingListComponent
      },
      {
        path:'booking-calender',
        component:BookingCalenderComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
