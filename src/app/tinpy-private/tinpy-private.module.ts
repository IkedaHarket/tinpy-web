import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TinpyPrivateRoutingModule } from './tinpy-private-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { ComentarioProfileComponent } from './components/comentario-profile/comentario-profile.component';
import { MyShopComponent } from './pages/my-shop/my-shop.component';
import { EditProfileComponent } from './components/modals/edit-profile/edit-profile.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';


@NgModule({
  declarations: [
    ProfileComponent,
    ComentarioProfileComponent,
    MyShopComponent,
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TinpyPrivateRoutingModule,
    DynamicDialogModule,
  ]
})
export class TinpyPrivateModule { }
