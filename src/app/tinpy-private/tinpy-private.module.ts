import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TinpyPrivateRoutingModule } from './tinpy-private-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    TinpyPrivateRoutingModule
  ]
})
export class TinpyPrivateModule { }
