import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Perfil } from 'src/app/core/interfaces';
import { PerfilResponse } from '../../interfaces/perfiles/perfil-response.interface';

@Injectable({
  providedIn: 'root'
})
export class PerfilesService {

  private _perfil: Perfil = {};

  public get perfil() : Perfil {
    return {...this._perfil}
  }

  public set perfil(perfil : Perfil) {
    this._perfil = perfil;
  }

  private _tinpyBackendURL: string = environment.tinpyBackendURL;

  constructor(private http: HttpClient) {}

  getPerfilByUserID(id:string):Observable<Perfil>{
    return this.http.get<Perfil>(`${this._tinpyBackendURL}/api/perfiles/usuario/${id}`)
      .pipe( tap( (perfil)=> this._perfil = perfil ) )
  }

  editProfile(idPerfil:string,body:any):Observable<PerfilResponse>{
    const headers = new HttpHeaders(
      {
        "enctype": "multipart/form-data",
        "x-token": localStorage.getItem('token') || ''
      }
      );
    const formData = new FormData();
    formData.append("img",body.img)
    formData.append("telefono",body.phone)
    formData.append("descripcion",body.descripcion)
    formData.append("nombre",body.name)
    formData.append("enlace",body.enlace)
    return this.http.put<PerfilResponse>(`${this._tinpyBackendURL}/api/perfiles/${idPerfil}`,formData,{headers})
    .pipe( tap( ({perfil})=> this._perfil = perfil ) )
  }
  postProfile(body:any):Observable<PerfilResponse>{
    const headers = new HttpHeaders(
      {
        "enctype": "multipart/form-data",
        "x-token": localStorage.getItem('token') || ''
      }
      );
    const formData = new FormData();
    formData.append("img",body.img)
    formData.append("telefono",body.phone)
    formData.append("descripcion",body.descripcion)
    formData.append("nombre",body.name)
    formData.append("enlace",body.enlace)
    return this.http.post<PerfilResponse>(`${this._tinpyBackendURL}/api/perfiles`,formData,{headers})
    .pipe( tap( ({perfil})=> this._perfil = perfil ) )
  }
}
