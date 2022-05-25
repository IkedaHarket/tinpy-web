import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { AuthResponse,Perfil } from 'src/app/core/interfaces';
import { PerfilesService } from 'src/app/core/services/perfiles/perfiles.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _tinpyBackendURL: string = environment.tinpyBackendURL;
  private _perfil        : Perfil = {};

  get perfil(){
    return {...this._perfil};
  }
  set perfil(perfil : Perfil) {
    this._perfil = perfil;
  }

  constructor(
    private http: HttpClient,
    private perfilesService:PerfilesService,
    ) {
    if (!environment.production) console.log("backend tinpy", this._tinpyBackendURL);
  }
  postRegisterUser(correo:string, password:string):Observable<AuthResponse>{
    return this.http.post<AuthResponse>(`${this._tinpyBackendURL}/api/auth/register`,{correo,password})
    .pipe(
      tap( resp => {
        if(resp.ok){
          localStorage.setItem('token',resp.token!);
          this._perfil.usuario = {
            correo : resp.usuario?.correo || undefined,
            uid  : resp.usuario?.uid || undefined,
          }
          this.getPerfil(resp.usuario?.uid!)
        }
      })
    );
  }
  postLogin( correo:string, password:string ):Observable<AuthResponse>{
    const url = `${this._tinpyBackendURL}/api/auth/login`;
    return this.http.post<AuthResponse>(url,{ correo,password })
        .pipe(
          tap( resp => {
            if(resp.ok && resp.usuario?.estado){
              localStorage.setItem('token',resp.token!);
              this._perfil.usuario = {
                correo : resp.usuario?.correo || undefined,
                uid  : resp.usuario?.uid || undefined
              }
              this.getPerfil(resp.usuario?.uid!)
            }
          })
        )
  }
  validarToken():Observable<boolean>{
    const url = `${this._tinpyBackendURL}/api/auth/renew`;
    const headers = new HttpHeaders()
        .set('x-token',localStorage.getItem('token') || '')

    return this.http.get<AuthResponse>(url,{headers})
        .pipe(
          map(resp=>{
            localStorage.setItem('token',resp.token!);
            this._perfil.usuario = {
              correo : resp.usuario?.correo,
              uid  : resp.usuario?.uid
            }
            this.getPerfil(resp.usuario?.uid!)
            return resp.ok!;
          }),
          catchError(err=> {
            this._perfil.usuario = {
              correo : undefined,
              uid  : undefined
            }
            return of(false)
          })
        )
  }
  logout(){
    localStorage.removeItem('token');
    this._perfil = {}
  }

  private getPerfil(uid:string){
    this.perfilesService.getPerfilByUserID(uid).subscribe({
      next: (perfil)=> {
        if(perfil){
          this.perfil = perfil;
        }
      },
      error:()=> console.log})
  }
}
