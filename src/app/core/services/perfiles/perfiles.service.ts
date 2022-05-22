import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Perfil } from 'src/app/core/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PerfilesService {

  private _tinpyBackendURL: string = environment.tinpyBackendURL;

  constructor(private http: HttpClient) {}

  getPerfilByUserID(id:string):Observable<Perfil>{
    return this.http.get<Perfil>(`${this._tinpyBackendURL}/api/perfiles/usuario/${id}`)
  }
}
