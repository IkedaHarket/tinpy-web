import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NegocioByIDResponse } from '../../interfaces/negocios/negocio-by-id-response.interface';

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
  postNegocio(body:any){
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders()
                    .set('x-token',token);
    return this.http.post<NegocioByIDResponse>(`${this._tinpyBackendURL}/api/negocios`,{
      tipoNegocio: body.shopType,
      nombre : body.name,
      telefono : body.phone,
      correo: body.email,
      descripcion: body.desc
    },{headers})
  }
}
