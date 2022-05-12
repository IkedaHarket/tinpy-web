import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Productos } from 'src/app/core/interfaces/productos/productos-by-name-paginate-response.interface';
import { ProductosService } from 'src/app/core/services/productos/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  productos : Productos = {};
  searchQuery: string = '';
  page:number = 1;
  limit: number = 5;

  constructor(
    private productosService: ProductosService,
    ) { }

  ngOnInit() {
    this.searchQuery = localStorage.getItem('searchQuery') || 'a';

    if(window.history.state.productos){
      this.productos = window.history.state.productos
    }else{
      this.getProductsByName();
    }

  }
  getProductsByName(){
    this.productosService.getProductosByNamePaginates(this.searchQuery,this.page,this.limit).subscribe({
      next: ({productos})=>{
        if(productos!.docs?.length == 0){
          Swal.fire({
            'title': 'No se encontraron productos para esta busqueda',
            'icon': 'error',
            'showConfirmButton': false,
            'timer': 2000
          })
          return
        }
        this.productos = productos || {};
      },
      error:(err)=> console.log(err),
    })
  }

  paginate(event:any) {
    this.page = event.page+1;
    this.getProductsByName()
  }
}
