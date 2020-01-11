import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeviceComponent } from './device.component';
import { Chowkidaar } from '../blocks/chowkidaar';

const routes: Routes = [
                        {
                          path: '',
                          component: DeviceComponent,
                          canActivate: [Chowkidaar],
                          data: {authorities: ['authenticated']}
                        }
                      ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviceRoutingModule { }
