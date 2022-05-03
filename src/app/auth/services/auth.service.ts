import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterResponse } from '../interfaces/register-response.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _tinpyBackendURL: string = environment.tinpyBackendURL;
  constructor(private http: HttpClient) {
    if (!environment.production) console.log("backend tinpy", this._tinpyBackendURL);
  }
  postRegisterUser(correo:string, password:string):Observable<RegisterResponse>{
    return this.http.post<RegisterResponse>(`${this._tinpyBackendURL}/api/auth/register`,{correo,password});
  }
}
