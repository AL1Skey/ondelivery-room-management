import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { LayoutComponent } from './page/layout/layout.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { RoomsComponent } from './page/rooms/rooms.component';
import { RoomDetailComponent } from './page/room-detail/room-detail.component';
import { RoomFormComponent } from './page/room-form/room-form.component';
import { SuccessComponent } from './page/success/success.component';

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
    path:'booking/detail/:id',
    component: RoomDetailComponent
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
      
      
    ]
    
  },
  {
    path:'booking/create',
    component:RoomFormComponent
  },
  {
    path:'booking/detail/:id',
    component:RoomDetailComponent
  },
  {
    path:'booking/success',
    component:SuccessComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
