import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './blocks/auth-interceptor';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { CarouselComponent } from './carousel/carousel.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AddLocationComponent } from './add-location/add-location.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { DeviceListComponent } from './device-list/device-list.component';
import { AddBoardComponent } from './add-board/add-board.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VerifiedComponent } from './verified/verified.component';
import {Config} from './app.config.js';
import { LocationListComponent } from './location-list/location-list.component';
import { HomeToolbarComponent } from './home-toolbar/home-toolbar.component';
import { AddScheduleComponent } from './add-schedule/add-schedule.component';
import { HeaderComponent } from './header/header.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SettingsComponent } from './settings/settings.component';
import { UsageComponent } from './usage/usage.component';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { ReferComponent } from './refer/refer.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ContactComponent } from './contact/contact.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { EditLocationComponent } from './edit-location/edit-location.component';
import { Data } from './data.provider';
import { AddSwitchComponent } from './add-switch/add-switch.component';
import { UpdateWifiComponent } from './update-wifi/update-wifi.component';
import { IconSelectComponent } from './icon-select/icon-select.component';
import { EditScheduleComponent } from './edit-schedule/edit-schedule.component';
const config: SocketIoConfig = { url: Config.server, options: {} };

@NgModule({
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SocketIoModule.forRoot(config)
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CarouselComponent,
    AddLocationComponent,
    ScheduleComponent,
    DeviceListComponent,
    AddBoardComponent,
    LandingPageComponent,
    SignUpComponent,
    VerifiedComponent,
    LocationListComponent,
    HomeToolbarComponent,
    AddScheduleComponent,
    HeaderComponent,
    ToolbarComponent,
    SettingsComponent,
    UsageComponent,
    AboutComponent,
    HelpComponent,
    ReferComponent,
    ChangePasswordComponent,
    ContactComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    EditLocationComponent,
    AddSwitchComponent,
    UpdateWifiComponent,
    IconSelectComponent,
    EditScheduleComponent
  ],
  entryComponents:[AddLocationComponent, AddBoardComponent, AddScheduleComponent, AddSwitchComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    Data
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
