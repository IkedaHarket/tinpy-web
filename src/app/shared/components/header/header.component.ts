import { Component, DoCheck,  OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { Usuario } from 'src/app/core/interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,DoCheck {


  constructor(private authService:AuthService) { }

  usuario: Usuario = {};

  ngDoCheck(): void {
    console.log(this.authService.usuario);
  }

  ngOnInit(): void {

  }

}
