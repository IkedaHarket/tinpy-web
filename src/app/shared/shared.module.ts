import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrMsgDirective } from './directives/err-msg.directive';
import { ProductCardFullComponent } from './components/product-card-full/product-card-full.component';
import { ProductCardComponent } from './components/product-card/product-card.component';


@NgModule({
  declarations: [
    ErrMsgDirective,
    HeaderComponent,
    FooterComponent,
    ProductCardFullComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    ErrMsgDirective,
    HeaderComponent,
    FooterComponent,
    ProductCardFullComponent,
    ProductCardComponent
  ],
})
export class SharedModule { }
