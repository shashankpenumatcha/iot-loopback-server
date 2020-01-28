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

const config: SocketIoConfig = { url: 'http://shashank.local:3001', options: {} };

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
    VerifiedComponent
  ],
  entryComponents:[AddLocationComponent, AddBoardComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
