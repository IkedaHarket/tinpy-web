import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tinpy-web';

  constructor(private authService:AuthService){}

  ngOnInit(): void {
    (mapboxgl as any ).accessToken = environment.mapboxToken;
    if(localStorage.getItem('token')){
      this.authService.validarToken();
    }
  }
}
