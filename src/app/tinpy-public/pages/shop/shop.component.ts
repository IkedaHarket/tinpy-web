import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';

import { NegociosService } from '../../../core/services/negocios/negocios.service';
import { environment } from '../../../../environments/environment';
import { numberToStars } from 'src/app/shared/helpers/numberToStars';
import { HorariosService } from '../../../core/services/horarios/horarios.service';

import { Horario,NegocioByIDResponse } from 'src/app/core/interfaces';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  idNegocio:string = ''
  tinpyBackendURL: string = environment.tinpyBackendURL;
  negocio: NegocioByIDResponse = {}
  promedioEstrellas: number = 0;
  drawPromedioEstrellas: string[] = [];
  lngLat: [number,number] = [0,0]
  horario: Horario = {}

  constructor(
    private negociosService: NegociosService,
    private horariosService: HorariosService,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.activatedRoute.url.subscribe((url: UrlSegment[])=>{
      this.idNegocio = url[1].path
      this.negociosService.getNegocioById(this.idNegocio).subscribe({
        next: (negocio) => {
          this.negocio = negocio;
          let sumaEstrellas: number = 0;
          this.negocio.negocios?.estrellas?.map((star) => sumaEstrellas += star.numeroEstrellas || 0)
          this.promedioEstrellas = sumaEstrellas / this.negocio.negocios?.estrellas?.length! || 0
          this.drawPromedioEstrellas = numberToStars(this.promedioEstrellas);
          this.lngLat = [Number(negocio.negocios?.direccion?.lng) || 0, Number(negocio.negocios?.direccion?.lat) || 0]
          this.setHorario(negocio.negocios?._id || '')
        },
        error:(err)=>{
          console.log('Error:',err);
        }
      })
    });
    (function() { // DON'T EDIT BELOW THIS LINE
      const date = new Date()
      const d = document, s = d.createElement('script');
      s.src = 'https://tinpy.disqus.com/embed.js';
      s.setAttribute('data-timestamp', JSON.stringify(+date) );
      (d.head || d.body).appendChild(s);
      })();
  }
  setHorario(id:string){
  this.horariosService.getHorariosById(id).subscribe({
    next:(horario) => this.horario = horario,
    error:(err) => console.log('Error al obtener horario',err),
  })
  }
}
