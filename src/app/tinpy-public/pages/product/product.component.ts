import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductByIDResponse } from '../../interfaces/productos/product-by-id-response.interface';
import { environment } from 'src/environments/environment';
import { ProductosByNameRes } from '../../interfaces/productos/productos-by-name-response.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  idProducto:string = '';
  loading:boolean = true;
  dataProduct: ProductByIDResponse = {};
  tinpyBackendURL: string = environment.tinpyBackendURL;

  productsRelacionados: ProductosByNameRes = {};
  constructor(
    private productosService:ProductosService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe((url: UrlSegment[])=>{
      this.idProducto = url[1].path
      this.productosService.getProductById(this.idProducto).subscribe(data=>{
        this.dataProduct = data;
        window.scrollTo(0,0);
        this.loading = false;
        this.productosService.getProductosByName(data.nombre?.split(' ')[0] || ' ').subscribe(products =>{
          this.productsRelacionados = products;
        })
      })
    })
    
    
  }

}
