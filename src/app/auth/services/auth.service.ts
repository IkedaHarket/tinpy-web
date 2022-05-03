import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, tap } from 'rxjs';
import { AuthResponse, Usuario } from '../interfaces/register-response.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _tinpyBackendURL: string = environment.tinpyBackendURL;
  private _usuario        : Usuario = {};

  get usuario(){
    return {...this._usuario};
  }

  constructor(private http: HttpClient) {
    if (!environment.production) console.log("backend tinpy", this._tinpyBackendURL);
  }
  postRegisterUser(correo:string, password:string):Observable<AuthResponse>{
    return this.http.post<AuthResponse>(`${this._tinpyBackendURL}/api/auth/register`,{correo,password})
    .pipe(
      tap( resp => {
        if(resp.ok){
          localStorage.setItem('token',resp.token!);
          this._usuario = {
            correo : resp.usuario!.correo,
            uid  : resp.usuario!.uid
          }
        }
      })
    );
  }
  postLogin( correo:string, password:string ):Observable<AuthResponse>{
    const url = `${this._tinpyBackendURL}/api/auth/login`;
    return this.http.post<AuthResponse>(url,{ correo,password })
        .pipe(
          tap( resp => {
            if(resp.ok){
              localStorage.setItem('token',resp.token!);
            }
          })
        )
  }
}
