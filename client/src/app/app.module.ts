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
import {Config} from './app.config.js';
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
    AddLocationComponent
  ],
  entryComponents:[AddLocationComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
