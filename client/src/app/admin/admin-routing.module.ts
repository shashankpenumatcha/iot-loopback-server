import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { Chowkidaar } from '../blocks/chowkidaar';
import { RegisterDeviceComponent } from './register/register-device/register-device.component';
import { RegisterBoardComponent } from './register/register-board/register-board.component';


const routes: Routes = [
                        {
                          path: '',
                          component: AdminComponent,
                          canActivate: [Chowkidaar],
                          data: {authorities: ['authenticated', 'admin']}
                        }, {
                          path: 'register/device',
                          component: RegisterDeviceComponent,
                          canActivate: [Chowkidaar],
                          data: {authorities: ['authenticated', 'admin']}
                        }, {
                          path: 'register/board',
                          component: RegisterBoardComponent,
                          canActivate: [Chowkidaar],
                          data: {authorities: ['authenticated', 'admin']}
                        }
                      ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
