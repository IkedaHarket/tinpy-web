import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ProductosService } from 'src/app/core/services/productos/productos.service';
import { Categoria, ProductosPages } from 'src/app/core/interfaces';
import { CategoriaService } from '../../../core/services/categorias/categoria.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  productos : ProductosPages = {};
  page:number = 1;
  limit: number = 5;
  categorias: Categoria[] = [];
  
  constructor(
    private productosService: ProductosService,
    private categoriasService: CategoriaService,
    ) { }

  ngOnInit() {
    if(this.categoriasService.categorias.length === 0){
      this.categoriasService.getCategorias().pipe(take(1)).subscribe(({categorias})=>{
        this.categorias = categorias
      })
    }else{
      this.categorias = this.categoriasService.categorias;
    }

    this.productosService.searchedProducts$.subscribe((products)=>{
      this.productos = products
      this.productos.docs = this.productos.docs?.filter(({estado})=> estado)
      
      if(Object.keys(products).length === 0){
        this.getProductsByName()
      }
    })
  }
  getProductsByName(){
    this.productosService.getProductosByNamePaginates(localStorage.getItem('searchProducts')!, this.page,this.limit)
    .subscribe({
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
        console.log(productos);
        this.productos = productos || {};
        this.productos.docs = this.productos.docs?.filter(({estado})=> estado)
        this.productosService.emitSearchedProducts(this.productos)
      },
      error:(err)=> console.log(err),
    })
  }

  paginate(event:any) {
    this.page = event.page+1;
    this.getProductsByName()
  }

}
