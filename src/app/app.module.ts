import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';

import { LayoutComponent } from './page/layout/layout.component';

import { RoomsComponent } from './page/rooms/rooms.component';
import { UsersComponent } from './page/users/users.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListItem, MatListModule } from '@angular/material/list';
import { RoomDetailComponent } from './page/room-detail/room-detail.component';
import { RoomFormComponent } from './page/room-form/room-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SuccessComponent } from './page/success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    RoomsComponent,
    UsersComponent,
    DashboardComponent,
    RoomDetailComponent,
    RoomFormComponent,
    SuccessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatListModule,
    MatListItem,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
