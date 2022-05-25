import { Component, DoCheck, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { Perfil } from 'src/app/core/interfaces';
import { PerfilesService } from '../../../core/services/perfiles/perfiles.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,DoCheck {

  constructor(
    private authService:AuthService,
    private router:Router
    ) { }

  tinpyBackendURL: string = environment.tinpyBackendURL;
  perfil: Perfil = {}

  ngDoCheck(): void {
    this.setDefaultPerfil();
    if(this.authService.perfil.usuario?.uid){
      this.perfil = this.authService.perfil
    }
  }
  ngOnInit(): void {
    this.perfil = this.authService.perfil;
  }

  logout(){
    this.authService.logout();
    this.setDefaultPerfil();
    this.router.navigateByUrl('/auth')
  }
  setDefaultPerfil(){
    this.perfil = {
      img:'default.png',
    }
  }
}
