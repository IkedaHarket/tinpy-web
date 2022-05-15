import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrMsgDirective } from './directives/err-msg.directive';
import { ProductCardFullComponent } from './components/product-card-full/product-card-full.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { MiniMapaComponent } from './components/mini-mapa/mini-mapa.component';
import { ProductsByNegocioViewComponent } from './components/products-by-negocio-view/products-by-negocio-view.component';
import { PrimengModule } from '../primeng/primeng.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ErrMsgDirective,
    HeaderComponent,
    FooterComponent,
    ProductCardFullComponent,
    ProductCardComponent,
    MiniMapaComponent,
    ProductsByNegocioViewComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedRoutingModule,
    PrimengModule
  ],
  exports: [
    ErrMsgDirective,
    HeaderComponent,
    FooterComponent,
    ProductCardFullComponent,
    ProductCardComponent,
    MiniMapaComponent,
    ProductsByNegocioViewComponent
  ],
})
export class SharedModule { }
