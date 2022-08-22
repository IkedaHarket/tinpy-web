import { NgModule } from '@angular/core';
import {PaginatorModule} from 'primeng/paginator';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {TableModule} from 'primeng/table';
import {ProgressSpinnerModule} from 'primeng/progressspinner';


@NgModule({
  imports: [
    PaginatorModule,
    DynamicDialogModule,
    TableModule,
    ProgressSpinnerModule,
  ],
  exports:[
    PaginatorModule,
    DynamicDialogModule,
    TableModule,
    ProgressSpinnerModule,
  ]
})
export class PrimengModule { }
