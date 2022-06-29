import { NgModule } from '@angular/core';
import {PaginatorModule} from 'primeng/paginator';
import {DynamicDialogModule} from 'primeng/dynamicdialog';


@NgModule({
  imports: [
    PaginatorModule,
    DynamicDialogModule
  ],
  exports:[
    PaginatorModule,
    DynamicDialogModule
  ]
})
export class PrimengModule { }
