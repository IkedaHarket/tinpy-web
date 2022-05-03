import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  formSearch: FormGroup = this.fb.group({
    search: ['',[Validators.required]]
  })

  constructor(
    private fb:FormBuilder,
    private productosService: ProductosService,
    private router:Router,
    ){}
  click(){
    if(this.formSearch.invalid) return
    const {search} = this.formSearch.value
    this.productosService.getProductosByName(search).subscribe({
      next:({productos})=>{
        if(productos!.length == 0){
          Swal.fire({
            'title': 'No se encontraron productos para esta busqueda',
            'icon': 'error',
            'showConfirmButton': false,
            'timer': 2000
          })
          return
        }
        this.router.navigateByUrl('/search')
      },
      error:(err)=> console.log(err),
    });
  }
}
