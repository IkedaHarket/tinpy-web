import { NgModule } from '@angular/core';
import {PaginatorModule} from 'primeng/paginator';


@NgModule({
  imports: [
    PaginatorModule
  ],
  exports:[
    PaginatorModule
  ]
})
export class PrimengModule { }
