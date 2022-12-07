import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NegocioByIDResponse } from '../../interfaces/negocios/negocio-by-id-response.interface';
import { Negocio } from '../../interfaces/negocios/negocio.interface';

@Injectable({
  providedIn: 'root'
})
export class NegociosService {

  private _tinpyBackendURL: string = environment.tinpyBackendURL;

  constructor(private http: HttpClient) { }

  getNegocioById(id:string):Observable<NegocioByIDResponse>{
    return this.http.get<NegocioByIDResponse>(`${this._tinpyBackendURL}/api/negocios/${id}`)
  }
  getNegocioByIdUser(id:string):Observable<NegocioByIDResponse>{
    return this.http.get<NegocioByIDResponse>(`${this._tinpyBackendURL}/api/negocios/user/${id}`)
  }
  postNegocio(body:any):Observable<NegocioByIDResponse>{
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders()
                    .set('x-token',token);
    let formData:FormData = new FormData();
          formData.append('tipoNegocio', body.shopType);
          formData.append('nombre', body.name);
          formData.append('telefono', body.phone);
          formData.append('correo', body.email);
          formData.append('descripcion', body.desc);
          formData.append('img', body.img);
    return this.http.post<NegocioByIDResponse>(`${this._tinpyBackendURL}/api/negocios`,formData,{headers})
  }
  putNegocio(id:string,body:any):Observable<Negocio>{
    console.log('ID',id);
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders()
                    .set('x-token',token);
    let formData:FormData = new FormData();
          formData.append('tipoNegocio', body.shopType);
          formData.append('nombre', body.name);
          formData.append('telefono', body.phone);
          formData.append('correo', body.email);
          formData.append('descripcion', body.desc);
          formData.append('img', body.img);

    return this.http.put<any>(`${this._tinpyBackendURL}/api/negocios/${id}`,formData,{headers}).pipe(
        switchMap(({negocio}) => this.getNegocioById(negocio?._id!)),
        map(({negocios}) => negocios || {}),
      )
  }
}
