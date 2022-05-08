import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import { ProductosPaginateRes } from '../interfaces/productos/productos-pag-response.interface';
import { ProductosByNameRes } from '../interfaces/productos/productos-by-name-response.interface';
import { ProductByIDResponse } from '../interfaces/productos/product-by-id-response.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private _tinpyBackendURL: string = environment.tinpyBackendURL;

  constructor(private http: HttpClient) {
    if (!environment.production) console.log("backend tinpy", this._tinpyBackendURL);
  }
  getProductosPaginate():Observable<ProductosPaginateRes>{
    return this.http.get<ProductosPaginateRes>(`${this._tinpyBackendURL}/api/productos/paginate`)
  }
  getProductosByName(query:string):Observable<ProductosByNameRes>{
    return this.http.get<ProductosByNameRes>(`${this._tinpyBackendURL}/api/productos/name/${query}`)
  }
  getProductById(id:string):Observable<ProductByIDResponse>{
    return this.http.get<ProductByIDResponse>(`${this._tinpyBackendURL}/api/productos/${id}`)
  }
}
