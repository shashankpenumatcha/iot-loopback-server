import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { RegisterDeviceComponent } from './register/register-device/register-device.component';
import { RegisterBoardComponent } from './register/register-board/register-board.component';
import { FormsModule } from '@angular/forms';
import { UserManagementComponent } from './user-management/user-management.component';



@NgModule({
  declarations: [AdminComponent, RegisterDeviceComponent, RegisterBoardComponent, UserManagementComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
