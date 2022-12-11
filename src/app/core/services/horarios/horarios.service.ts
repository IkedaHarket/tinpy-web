import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Horario } from 'src/app/core/interfaces';
import { RespHorario } from '../../interfaces/horarios';

@Injectable({
  providedIn: 'root'
})
export class HorariosService {

  private _tinpyBackendURL: string = environment.tinpyBackendURL;

  constructor(private http: HttpClient) { }

  getHorariosById(id:string):Observable<Horario>{
    return this.http.get<Horario>(`${this._tinpyBackendURL}/api/horarios/negocio/${id}`)
  }
  postHorario(body:any):Observable<RespHorario>{
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders()
                    .set('x-token',token);
    return this.http.post<RespHorario>(`${this._tinpyBackendURL}/api/horarios`,body,{headers})
  }
  putHorario(id:string,body:any):Observable<RespHorario>{
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders()
                    .set('x-token',token);
    return this.http.put<RespHorario>(`${this._tinpyBackendURL}/api/horarios/${id}`,body,{headers})
  }
}
