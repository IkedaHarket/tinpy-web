import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Negocio, Perfil } from 'src/app/core/interfaces';
import { NegociosService } from 'src/app/core/services/negocios/negocios.service';

@Component({
  selector: 'app-my-shop',
  templateUrl: './my-shop.component.html',
  styleUrls: ['./my-shop.component.scss']
})
export class MyShopComponent implements OnInit {

  perfil: Perfil = {}
  shop: Negocio = {}
  noShop : boolean = false;
  constructor(
    private authService:AuthService,
    private negociosService: NegociosService,
    ) { }

  ngOnInit(): void {
    this.perfil = this.authService.perfil
    this.negociosService.getNegocioByIdUser(this.perfil.usuario?.uid!).subscribe({
      next: ({negocios})=>{
        this.shop = negocios || {};
        console.log(this.shop);
      },
      error:()=>{
        this.noShop = true;
      }
    })
  }

}
