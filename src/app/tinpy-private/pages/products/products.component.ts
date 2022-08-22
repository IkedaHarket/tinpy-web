import { Component, OnInit } from '@angular/core';
import { PerfilesService } from '../../../core/services/perfiles/perfiles.service';
import { NegociosService } from '../../../core/services/negocios/negocios.service';
import { ProductosService } from '../../../core/services/productos/productos.service';
import { ProductosPages } from 'src/app/core/interfaces';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  uidUser: string = '';
  products: ProductosPages = {};
  loadedProducts: boolean = false;
  tinpyBackendURL: string = environment.tinpyBackendURL;
  page:number = 1;
  limit: number = 4;
  idNegocio : string = '';

  constructor(
    private perfilService : PerfilesService,
    private negocioService: NegociosService,
    private productsService: ProductosService,
    ) { }

  ngOnInit(): void {
    this.uidUser = this.perfilService.perfil.usuario?.uid || '';
    this.negocioService.getNegocioByIdUser(this.uidUser).subscribe(({negocios})=>{
      this.idNegocio = negocios?._id || '';
      this.productsService.getProductsByIdNegocioPaginate(negocios?._id || '').subscribe(({productos})=>{
        this.products = productos!
        this.loadedProducts = true;
        console.log( this.products);
      })
    })
  }
  paginate(event:any) {
    this.page = event.page+1;
    this.getProductsByNegocioPaginate()
  }
  getProductsByNegocioPaginate(){
    this.productsService.getProductsByIdNegocioPaginate(this.idNegocio,this.page,this.limit).subscribe({
      next:(productos) => {
        this.products = productos.productos!
        // this.loading = false
      },
      error:(err) => {
        console.log(err)
      }
      })
  }
}
