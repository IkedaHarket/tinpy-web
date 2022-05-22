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
    private perfilesService:PerfilesService,
    private router:Router
    ) { }

  tinpyBackendURL: string = environment.tinpyBackendURL;
  perfil: Perfil = {}
  searchProfile:boolean = true;

  ngDoCheck(): void {

    if(this.authService.usuario.uid && this.searchProfile){
      this.perfil.usuario = {...this.authService.usuario}
      this.searchProfile = false;
      this.perfilesService.getPerfilByUserID(this.perfil.usuario.uid!).subscribe({
        next: (perfil)=> this.perfil = perfil,
        error:()=> {console.log}
        })
    }
    if(!this.authService.usuario.uid){
      this.setDefaultPerfil();
    }
  }
  ngOnInit(): void {

  }
  logout(){
    this.authService.logout();
    this.searchProfile = true;
    this.setDefaultPerfil();
    this.router.navigateByUrl('/auth')
  }
  setDefaultPerfil(){
    this.perfil = {
      img:'default.png',
    }
  }
}
