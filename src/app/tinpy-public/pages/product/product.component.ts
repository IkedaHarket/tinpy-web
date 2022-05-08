import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductByIDResponse } from '../../interfaces/productos/product-by-id-response.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  loading:boolean = true;
  dataProduct: ProductByIDResponse = {};
  tinpyBackendURL: string = environment.tinpyBackendURL;

  constructor(
    private productosService:ProductosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const idProducto:string = this.router.url.split('/')[2];
    this.productosService.getProductById(idProducto).subscribe(data=>{
      this.dataProduct = data;
      this.loading = false;
    })
  }

}
