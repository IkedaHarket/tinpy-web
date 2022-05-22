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
    const uid = this.authService.usuario?.uid || false;
    const token = localStorage.getItem('token') || false;
    console.log(token,uid);
      if(uid || token){
        this.router.navigateByUrl('/vip')
      }
    return true;
  }
  canLoad(): Observable<boolean> | Promise<boolean> | boolean {
      const uid = this.authService.usuario?.uid || false;
      const token = localStorage.getItem('token')|| false;
      console.log(token,uid);
        if(uid || token){
          this.router.navigateByUrl('/vip')
        }
    return true;
  }
}
