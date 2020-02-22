import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { HomeComponent } from './home/home.component';
import {Chowkidaar} from './blocks/chowkidaar';
import { CarouselComponent } from './carousel/carousel.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { DeviceListComponent } from './device-list/device-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VerifiedComponent } from './verified/verified.component';
import { AddLocationComponent } from './add-location/add-location.component';
import { SettingsComponent } from './settings/settings.component';
import { UsageComponent } from './usage/usage.component';
import { HelpComponent } from './help/help.component';
import { ReferComponent } from './refer/refer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AddScheduleComponent } from './add-schedule/add-schedule.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';


const routes: Routes = [
  {path: 'verified', component: VerifiedComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'login', component: LoginComponent, data: {nav: true, toolbar: false, back: '/welcome' }},
  {path: 'welcome', component: LandingPageComponent},
  {path: 'change-password', component: ChangePasswordComponent, canActivate: [Chowkidaar], data: {authorities: ['authenticated']}},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'reset-password', component: ResetPasswordComponent},
  {path: 'add-location', component: AddLocationComponent, canActivate: [Chowkidaar], data: {authorities: ['authenticated']}},
  {path: 'add-schedule', component: AddScheduleComponent, canActivate: [Chowkidaar], data: {authorities: ['authenticated']}},
  {path: 'settings', component: SettingsComponent, canActivate: [Chowkidaar], data: {authorities: ['authenticated']}},
  {path: 'help', component: HelpComponent, canActivate: [Chowkidaar], data: {authorities: ['authenticated']}},
  {path: 'refer', component: ReferComponent, canActivate: [Chowkidaar], data: {authorities: ['authenticated']}},
  {path: 'about', component: AboutComponent, canActivate: [Chowkidaar], data: {authorities: ['authenticated']}},
  {path: 'contact', component: ContactComponent, canActivate: [Chowkidaar], data: {authorities: ['authenticated']}},
  {path: 'carousel', component: CarouselComponent, canActivate: [Chowkidaar], data: {authorities: ['authenticated']}},
  {path: 'device-list', component: DeviceListComponent, canActivate: [Chowkidaar], data: {authorities: ['authenticated']}},
  {path: '', component: HomeComponent, canActivate: [Chowkidaar], data: {authorities: ['authenticated']}},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'devices', loadChildren: () => import('./device/device.module').then(m => m.DeviceModule) },
  {path: 'schedules', component: ScheduleComponent, canActivate: [Chowkidaar], data: {authorities: ['authenticated']}},
  {path: 'usage', component: UsageComponent, canActivate: [Chowkidaar], data: {authorities: ['authenticated']}},

  {path: '**', component: LandingPageComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
