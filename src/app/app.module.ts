import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import { BookingCalenderComponent } from './page/booking-calender/booking-calender.component';
import { BookingListComponent } from './page/booking-list/booking-list.component';
import { LayoutComponent } from './page/layout/layout.component';
import { NewBookingComponent } from './page/new-booking/new-booking.component';
import { RoomsComponent } from './page/rooms/rooms.component';
import { UsersComponent } from './page/users/users.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListItem, MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BookingCalenderComponent,
    BookingListComponent,
    LayoutComponent,
    NewBookingComponent,
    RoomsComponent,
    UsersComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatListModule,
    MatListItem,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
