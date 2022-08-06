import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ShopTypesResponse } from '../../interfaces/tipo-negocios/shopTypes.interface';
import { tap, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoNegociosService {

  private _tinpyBackendURL: string = environment.tinpyBackendURL;

  private _shopTypes: ShopTypesResponse = {}

  
  public get shopTypes() : ShopTypesResponse {
    return {...this._shopTypes}
  }
  
  constructor(private http: HttpClient) {}

  getShopTypes():Observable<ShopTypesResponse>{
    return this.http.get<ShopTypesResponse>(`${this._tinpyBackendURL}/api/tipos-negocios/all`)
      .pipe(tap((shopTypes)=>{
        this._shopTypes = shopTypes;
      }))
  }
}
