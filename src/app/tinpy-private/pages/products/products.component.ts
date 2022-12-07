import { Component, OnInit, OnDestroy } from '@angular/core';
import { PerfilesService } from '../../../core/services/perfiles/perfiles.service';
import { NegociosService } from '../../../core/services/negocios/negocios.service';
import { ProductosService } from '../../../core/services/productos/productos.service';
import { ProductosPages } from 'src/app/core/interfaces';
import { environment } from 'src/environments/environment';
import { DialogService } from 'primeng/dynamicdialog';
import { NewProductComponent } from '../../components/modals/new-product/new-product.component';
import { EditProductComponent } from '../../components/modals/edit-product/edit-product.component';
import { MyProductService } from '../../services/my-product.service';
import { Producto } from '../../../core/interfaces/productos/producto.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers:[DialogService]
})
export class ProductsComponent implements OnInit, OnDestroy {

  uidUser: string = '';
  products: ProductosPages = {};
  loadedProducts: boolean = false;
  tinpyBackendURL: string = environment.tinpyBackendURL;
  page:number = 1;
  limit: number = 4;
  idNegocio : string = '';
  refModal: any;

  constructor(
    private perfilService : PerfilesService,
    private negocioService: NegociosService,
    private productsService: ProductosService,
    private myProduct: MyProductService,
    public dialogService: DialogService,
    ) { }

  ngOnInit(): void {
    this.uidUser = this.perfilService.perfil.usuario?.uid || '';
    this.negocioService.getNegocioByIdUser(this.uidUser).subscribe(({negocios})=>{
      this.idNegocio = negocios?._id || '';
      this.productsService.getProductsByIdNegocioPaginate(negocios?._id || '').subscribe(({productos})=>{
        this.products = productos!
        this.loadedProducts = true;
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
      }
    })
  }
  openModalNewProduct():void{
    this.refModal = this.dialogService.open(NewProductComponent, {
      header: 'Nuevo Producto',
      width: '70%',
      contentStyle: {"height": "auto", "overflow": "auto"},
      baseZIndex: 10000,
      closeOnEscape:true
    });
  }

  openModalEditProduct(product:Producto):void{
    this.myProduct.emitProductSelected(product);
    this.refModal = this.dialogService.open(EditProductComponent, {
      header: 'Editar Producto',
      width: '70%',
      contentStyle: {"height": "auto", "overflow": "auto"},
      baseZIndex: 10000,
      closeOnEscape:true
    });
  }

  ngOnDestroy() {
    if (this.refModal) this.refModal.close()
  }
  delete(id:string){
    this.productsService.deleteProduct(id).subscribe(resp=>{
      if(resp.ok){
        this.products.docs = this.products.docs?.filter(p => resp.producto?._id !== p._id)
      }
    })
  }

  changeStateProduct(id: string){
    this.productsService.changeStateProduct(id).subscribe((product)=>{
      this.products.docs = this.products.docs?.map(p => (product?._id === p._id) ? product! : p )
    })
  }
}
