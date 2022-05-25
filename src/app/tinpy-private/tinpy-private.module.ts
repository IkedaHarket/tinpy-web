import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TinpyPrivateRoutingModule } from './tinpy-private-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { ComentarioProfileComponent } from './componets/comentario-profile/comentario-profile.component';


@NgModule({
  declarations: [
    ProfileComponent,
    ComentarioProfileComponent
  ],
  imports: [
    CommonModule,
    TinpyPrivateRoutingModule
  ]
})
export class TinpyPrivateModule { }
