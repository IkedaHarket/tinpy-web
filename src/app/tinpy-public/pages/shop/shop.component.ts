import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { NegociosService } from '../../../core/services/negocios/negocios.service';
import { NegocioByIDResponse } from '../../../core/interfaces/negocios/negocio-by-id-response.interface';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  negocio: NegocioByIDResponse = {}
  promedioEstrellas: number = 0;
  tinpyBackendURL: string = environment.tinpyBackendURL;

  constructor(
    private negociosService: NegociosService,
    private activatedRoute: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe((url: UrlSegment[])=>{
      this.negociosService.getNegocioById(url[1].path).subscribe({
        next: (negocio) => {
          this.negocio = negocio;
          let sumaEstrellas: number = 0;
          this.negocio.negocios?.estrellas?.map((star) => sumaEstrellas += star.numeroEstrellas || 0)
          this.promedioEstrellas = sumaEstrellas / this.negocio.negocios?.estrellas?.length! || 0
        },
        error:(err)=>{
          console.log('Error:',err);
        }
      })

    });
  }
}
