import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TinpyPublicRoutingModule } from './tinpy-public-routing.module';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    TinpyPublicRoutingModule
  ]
})
export class TinpyPublicModule { }
