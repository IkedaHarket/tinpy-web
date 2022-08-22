import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private _tinpyBackendURL: string = environment.tinpyBackendURL;
  private _categorias : Categoria[] = []
  
  public get categoria() : Categoria[] {
    return [...this._categorias]
  }
  
  constructor(private http: HttpClient) {}

  getCategorias():Observable<{ok:boolean;categorias:Categoria[]}>{
    return this.http.get<{ok:boolean;categorias:Categoria[]}>(`${this._tinpyBackendURL}/api/categorias/all`)
  }
}
