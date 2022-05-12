import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { ProductComponent } from './pages/product/product.component';
import { ShopComponent } from './pages/shop/shop.component';

const routes: Routes = [
  { path:'',       component:HomeComponent},
  { path:'search', component:SearchComponent},
  { path:'product/:id', component:ProductComponent},
  { path:'shop/:id', component:ShopComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TinpyPublicRoutingModule { }
