import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { ProductosService } from 'src/app/core/services/productos/productos.service';
import { ProductByIDResponse } from 'src/app/core/interfaces/productos/product-by-id-response.interface';
import { environment } from 'src/environments/environment';
import { Producto } from 'src/app/core/interfaces';

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

  productsRelacionados: Producto[] = [];
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
          this.productsRelacionados = products.productos || [];
        })
      })
    });
    
    (function() { // DON'T EDIT BELOW THIS LINE
      const date = new Date()
      const d = document, s = d.createElement('script');
      s.src = 'https://tinpy.disqus.com/embed.js';
      s.setAttribute('data-timestamp', JSON.stringify(+date) );
      (d.head || d.body).appendChild(s);
      })();
  }

}
