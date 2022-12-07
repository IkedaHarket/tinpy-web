import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from '../../core/interfaces/productos/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class MyProductService {

  private _productSelected = new BehaviorSubject<Producto>({})
  public productSelected$ = this._productSelected.asObservable();
  
  constructor() { }

  emitProductSelected(product : Producto) :void {
    this._productSelected.next(product);
  }

}
