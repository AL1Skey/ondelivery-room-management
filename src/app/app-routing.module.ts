import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { LayoutComponent } from './page/layout/layout.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { RoomsComponent } from './page/rooms/rooms.component';
import { RoomDetailComponent } from './page/room-detail/room-detail.component';
import { RoomFormComponent } from './page/room-form/room-form.component';
import { SuccessComponent } from './page/success/success.component';
import { RoomTableComponent } from './page/room-table/room-table.component';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full',
    
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'booking/detail/:id',
    component: RoomDetailComponent,
    canActivate:[AuthService],
  },
  {
    path: '',
    component:LayoutComponent,
    canActivate:[AuthService],
    children:[
      {
        path:'dashboard',
        component:DashboardComponent,
        children:[
          {
            path:'',
            component:RoomTableComponent
          }
        ]
      },
      {
        path:'rooms',
        component:RoomsComponent
      },
    ]
    
  },
  {
    path:'booking/create',
    component:RoomFormComponent,
    canActivate:[AuthService],
  },
  {
    path:'booking/detail/:id',
    component:RoomDetailComponent,
    canActivate:[AuthService],
  },
  {
    path:'booking/success',
    component:SuccessComponent,
    canActivate:[AuthService],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
