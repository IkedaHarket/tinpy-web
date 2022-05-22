import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route,  UrlSegment, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidarTokenGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router:Router,
  ){}

  canActivate(): Observable<boolean> | boolean {
    return this.authService.validarToken()
      .pipe(
        tap(valid =>{
          if(!valid) this.router.navigateByUrl('/auth')
        })
      );
  }
  canLoad(): Observable<boolean> | boolean {
    console.log('canLoad')
    return this.authService.validarToken()
      .pipe(
        tap(valid =>{
          if(!valid) this.router.navigateByUrl('/auth')
        })
      );
  }
}
