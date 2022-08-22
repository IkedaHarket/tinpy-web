import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { MyShopComponent } from './pages/my-shop/my-shop.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {
    path:'',
    children:[
    {path:'perfil',component:ProfileComponent},
    {path:'products',component:ProductsComponent},
    {path:'shop',component:MyShopComponent},
    {path:'**',redirectTo:'perfil'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TinpyPrivateRoutingModule { }
