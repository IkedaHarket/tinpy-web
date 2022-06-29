import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TinpyPrivateRoutingModule } from './tinpy-private-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { ComentarioProfileComponent } from './components/comentario-profile/comentario-profile.component';
import { MyShopComponent } from './pages/my-shop/my-shop.component';


@NgModule({
  declarations: [
    ProfileComponent,
    ComentarioProfileComponent,
    MyShopComponent
  ],
  imports: [
    CommonModule,
    TinpyPrivateRoutingModule
  ]
})
export class TinpyPrivateModule { }
