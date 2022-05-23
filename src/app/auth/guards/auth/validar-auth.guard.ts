import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidarAuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService:AuthService,
    private router:Router,
    ){}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    const uid = this.authService.perfil.usuario?.uid || false;
    const token = localStorage.getItem('token') || false;
      if(uid || token){
        this.router.navigateByUrl('/vip')
      }
    return true;
  }
  canLoad(): Observable<boolean> | Promise<boolean> | boolean {
      const uid = this.authService.perfil.usuario?.uid || false;
      const token = localStorage.getItem('token')|| false;
        if(uid || token){
          this.router.navigateByUrl('/vip')
        }
    return true;
  }
}
