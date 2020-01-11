import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DeviceRoutingModule } from './device-routing.module';
import { DeviceComponent } from './device.component';


@NgModule({
  declarations: [DeviceComponent],
  imports: [
    CommonModule,
    DeviceRoutingModule,
    FormsModule
  ]
})
export class DeviceModule { }
