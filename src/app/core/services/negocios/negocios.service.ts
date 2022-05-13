import { HttpClient } from '@angular/common/http';
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
}
