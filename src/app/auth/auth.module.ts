import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AuthRoutingModule } from './auth-routing.module';
import { MainComponent } from './pages/main/main.component';
import { SliderComponent } from './components/slider/slider.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MainComponent,
    SliderComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    SweetAlert2Module.forRoot(),
    SharedModule
  ]
})
export class AuthModule { }
