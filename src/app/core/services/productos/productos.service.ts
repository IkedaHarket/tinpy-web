import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import {
  ProductosByNameRes,
  ProductByIDResponse,
  ProductsByNamePaginateResponse,
  ProductosByIdNegocioResponse,
  ProductosPages } from 'src/app/core/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private _tinpyBackendURL: string = environment.tinpyBackendURL;

  constructor(private http: HttpClient) {
    if (!environment.production) console.log("backend tinpy", this._tinpyBackendURL);
  }
  getProductosPaginate():Observable<ProductosPages>{
    return this.http.get<ProductosPages>(`${this._tinpyBackendURL}/api/productos/paginate`)
  }
  getProductosByName(query:string):Observable<ProductosByNameRes>{
    return this.http.get<ProductosByNameRes>(`${this._tinpyBackendURL}/api/productos/name/${query}`)
  }
  getProductosByNamePaginates(query:string,page:number = 1,limit:number = 5):Observable<ProductsByNamePaginateResponse>{
    return this.http.get<ProductsByNamePaginateResponse>(`${this._tinpyBackendURL}/api/productos/name-paginate/${query}?page=${page}&limit=${limit}`)
  }
  getProductById(id:string):Observable<ProductByIDResponse>{
    return this.http.get<ProductByIDResponse>(`${this._tinpyBackendURL}/api/productos/${id}`)
  }
  getProductsByIdNegocioPaginate(id:string,page:number = 1,limit:number = 5):Observable<ProductosByIdNegocioResponse>{
    return this.http.get<ProductosByIdNegocioResponse>(`${this._tinpyBackendURL}/api/productos/negocio-productos-paginate/${id}?page=${page}&limit=${limit}`)
  }
  getProductsByIdNegocioAndNamePaginate(id:string,name:string,page:number = 1,limit:number = 5):Observable<ProductosByIdNegocioResponse>{
    return this.http.get<ProductosByIdNegocioResponse>(`${this._tinpyBackendURL}/api/productos/negocio-productos-paginate/${id}/${name}?page=${page}&limit=${limit}`)
  }
}
