import { Component, ElementRef, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ProductosService } from '../../../core/services/productos/productos.service';
import { Productos } from '../../../core/interfaces/productos/productos-by-negocio-paginate-response.interface';
import { filter, fromEvent, debounceTime, distinctUntilChanged } from 'rxjs';


@Component({
  selector: 'app-products-by-negocio-view',
  templateUrl: './products-by-negocio-view.component.html',
  styleUrls: ['./products-by-negocio-view.component.scss']
})
export class ProductsByNegocioViewComponent implements OnInit,AfterViewInit {

  @ViewChild('input') input!: ElementRef;
  @Input()
  idNegocio:string = '';
  loading:boolean = true;
  productos: Productos = {}
  page:number = 1;
  limit: number = 4;

  constructor(
    private productosService: ProductosService
    ) { }

  ngOnInit(): void {
    this.getProductsByNegocioPaginate();
  }
  ngAfterViewInit(){
    fromEvent(this.input.nativeElement,'keyup')
            .pipe(
                filter(Boolean),
                debounceTime(300),
                distinctUntilChanged()
            )
            .subscribe(event => {
              this.searchInput(event);
            });
  }
  getProductsByNegocioPaginate(){
    this.productosService.getProductsByIdNegocioPaginate(this.idNegocio,this.page,this.limit).subscribe({
      next:(productos) => {
        this.productos = productos.productos!
        this.loading = false
      },
      error:(err) => {
        console.log(err)
      }
      })
  }

  searchInput(event:any){
    if(event.target.value.trimEnd().trimStart() == ''){
      this.getProductsByNegocioPaginate();
      return
    }
    const name: string = event.target.value.trimEnd().trimStart()
    this.productosService.getProductsByIdNegocioAndNamePaginate(this.idNegocio, name,this.page,this.limit)
      .pipe(
          )
      .subscribe({
        next:(productos) => {
          this.productos = productos.productos!
          this.loading = false
        }
      })
  }

  paginate(event:any) {
    this.page = event.page+1;
    this.getProductsByNegocioPaginate()
  }
}
