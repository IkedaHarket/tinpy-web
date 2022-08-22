import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TipoNegociosService } from '../../../core/services/tipo-negocios/tipo-negocios.service';
import { ShopType } from '../../../core/interfaces/tipo-negocios/shopTypes.interface';
import { NegociosService } from '../../../core/services/negocios/negocios.service';
import { DireccionService } from '../../../core/services/direccion/direccion.service';

@Component({
  selector: 'app-no-shop',
  templateUrl: './no-shop.component.html',
  styleUrls: ['./no-shop.component.scss']
})
export class NoShopComponent implements OnInit {

  noShopForm: FormGroup = this.fb.group({
    name: ['aa',[Validators.required]],
    shopType: ['#',[Validators.required]],
    phone: ['aa',[Validators.required]],
    email: ['aa',[Validators.required]],
    desc: ['aa',[Validators.required]],
  })

  shopTypes: ShopType[] = [];
  address: {exist:boolean ; lngLat?:any} = {exist:false} 
  constructor(
    private fb: FormBuilder,
    private shopTypesService: TipoNegociosService,
    private negocioService: NegociosService,
    private direcciones : DireccionService,
    ) { }
  
  ngOnInit(): void {
    this.shopTypes = this.shopTypesService.shopTypes.tipoNegocios || [];
  }
  submit(){
    if(this.noShopForm.invalid || this.noShopForm.get('shopType')?.value == '#') return
    this.negocioService.postNegocio(this.noShopForm.value).subscribe(()=>{
      this.saveAddress();
    });
  }
  
  saveAddress(){
    if(!this.address.exist) return;
    this.direcciones.postDireccion(this.address.lngLat).subscribe(()=>location.reload())
  }

  changeMarkerMap(lngLat:any){
    this.address = {exist: true, lngLat}
  }
}
