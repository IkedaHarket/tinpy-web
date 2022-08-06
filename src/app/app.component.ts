import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth/services/auth.service';
import { TipoNegociosService } from './core/services/tipo-negocios/tipo-negocios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tinpy-web';

  loading:boolean = true;

  constructor(
    private authService:AuthService,
    private shopTypesService: TipoNegociosService,
    ){}

  ngOnInit(): void {
    (mapboxgl as any ).accessToken = environment.mapboxToken;
    if(localStorage.getItem('token')){
      this.authService.validarToken().subscribe({
        complete: () => this.loading = false
      })
    }else{
      this.loading = false;
    }
    this.shopTypesService.getShopTypes().pipe(take(1)).subscribe();
  }
}
