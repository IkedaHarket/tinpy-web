import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Horario } from 'src/app/core/interfaces';

@Injectable({
  providedIn: 'root'
})
export class HorariosService {

  private _tinpyBackendURL: string = environment.tinpyBackendURL;

  constructor(private http: HttpClient) { }

  getHorariosById(id:string):Observable<Horario>{
    return this.http.get<Horario>(`${this._tinpyBackendURL}/api/horarios/negocio/${id}`)
  }
}
