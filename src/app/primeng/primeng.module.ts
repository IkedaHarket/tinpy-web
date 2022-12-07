import { NgModule } from '@angular/core';
import {PaginatorModule} from 'primeng/paginator';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {TableModule} from 'primeng/table';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {TooltipModule} from 'primeng/tooltip';

@NgModule({
  imports: [
    PaginatorModule,
    DynamicDialogModule,
    TableModule,
    ProgressSpinnerModule,
    TooltipModule,
  ],
  exports:[
    PaginatorModule,
    DynamicDialogModule,
    TableModule,
    ProgressSpinnerModule,
    TooltipModule,
  ]
})
export class PrimengModule { }
