import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import { ProductosService } from 'src/app/core/services/productos/productos.service';
import { Producto } from 'src/app/core/interfaces';
import { map, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  formSearch: FormGroup = this.fb.group({
    search: ['',[Validators.required]]
  })

  unProducts!: Subscription;
  products: Producto[] = [];

  constructor(
    private fb:FormBuilder,
    private productosService: ProductosService,
    private router:Router,
    ){}


  ngOnInit(): void {
    this.unProducts = this.productosService.getProductosPaginate().pipe(
      map(({docs})=> docs),
      ).subscribe((productos)=> {
        this.products = productos?.slice(0,6) || [];
    });

  }

  click(){
    if(this.formSearch.invalid) return
    const {search} = this.formSearch.value

    this.productosService.getProductosByNamePaginates(search).subscribe({
      next:({productos})=>{
        console.log(productos);
        if(productos!.docs?.length == 0){
          Swal.fire({
            'title': 'No se encontraron productos para esta busqueda',
            'icon': 'error',
            'showConfirmButton': false,
            'timer': 2000
          })
          return
        }
        localStorage.setItem('searchQuery',this.formSearch.get('search')?.value)
        this.router.navigateByUrl('/search',{ state: { productos} })
      },
      error:(err)=> console.log(err),
    });
  }
  OnDestroy(){
    this.unProducts.unsubscribe();
  }
}
