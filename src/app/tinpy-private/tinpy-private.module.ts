import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TinpyPrivateRoutingModule } from './tinpy-private-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { ComentarioProfileComponent } from './components/comentario-profile/comentario-profile.component';
import { MyShopComponent } from './pages/my-shop/my-shop.component';
import { EditProfileComponent } from './components/modals/edit-profile/edit-profile.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { NoShopComponent } from './components/no-shop/no-shop.component';
import { MapAddressComponent } from './components/map-address/map-address.component';
import { ProductsComponent } from './pages/products/products.component';
import { PrimengModule } from '../primeng/primeng.module';
import { NewProductComponent } from './components/modals/new-product/new-product.component';
import { SharedModule } from '../shared/shared.module';
import { EditProductComponent } from './components/modals/edit-product/edit-product.component';


@NgModule({
  declarations: [
    ProfileComponent,
    ComentarioProfileComponent,
    MyShopComponent,
    EditProfileComponent,
    NoShopComponent,
    MapAddressComponent,
    ProductsComponent,
    NewProductComponent,
    EditProductComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TinpyPrivateRoutingModule,
    DynamicDialogModule,
    PrimengModule,
    SharedModule,
  ]
})
export class TinpyPrivateModule { }
