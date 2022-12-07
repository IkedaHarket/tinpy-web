import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Categoria } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private _tinpyBackendURL: string = environment.tinpyBackendURL;
  private _categorias : Categoria[] = []
  
  public get categorias() : Categoria[] {
    return [...this._categorias]
  }

  constructor(private http: HttpClient) {}

  getCategorias():Observable<{ok:boolean;categorias:Categoria[]}>{
    return this.http.get<{ok:boolean;categorias:Categoria[]}>(`${this._tinpyBackendURL}/api/categorias/all`).pipe(
      tap((data:{ok:boolean;categorias:Categoria[]}) => this._categorias = data.categorias)
      )
  }
}
