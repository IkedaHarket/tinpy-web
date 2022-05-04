import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TinpyPublicRoutingModule } from './tinpy-public-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    TinpyPublicRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class TinpyPublicModule { }