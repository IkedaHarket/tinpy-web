import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HorarioByIDNegocioResponse } from '../../interfaces/horarios/horario-by-id-negocio-response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HorariosService {

  private _tinpyBackendURL: string = environment.tinpyBackendURL;

  constructor(private http: HttpClient) { }

  getHorariosById(id:string):Observable<HorarioByIDNegocioResponse>{
    return this.http.get<HorarioByIDNegocioResponse>(`${this._tinpyBackendURL}/api/horarios/negocio/${id}`)
  }
}
