import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { HomeComponent } from './home/home.component';
import {Chowkidaar} from './blocks/chowkidaar';
import { CarouselComponent } from './carousel/carousel.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'carousel', component: CarouselComponent, canActivate: [Chowkidaar], data: {authorities: ['authenticated']}},
  {path: '', component: HomeComponent, canActivate: [Chowkidaar], data: {authorities: ['authenticated']}},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'devices', loadChildren: () => import('./device/device.module').then(m => m.DeviceModule) },
  {path: '**', component: LoginComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
