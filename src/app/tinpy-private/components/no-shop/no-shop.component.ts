import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TipoNegociosService } from '../../../core/services/tipo-negocios/tipo-negocios.service';
import { ShopType } from '../../../core/interfaces/tipo-negocios/shopTypes.interface';
import { NegociosService } from '../../../core/services/negocios/negocios.service';
import { DireccionService } from '../../../core/services/direccion/direccion.service';
import { Subscription, take, map, catchError, of } from 'rxjs';
import { Negocio } from '../../../core/interfaces/negocios/negocio.interface';
import Swal from 'sweetalert2';

type Plans = 'basic' | 'estandar' | 'premium'
enum PlansTypes {
  BASIC = 'basic',
  ESTANDAR = 'estandar',
  PREMIUM = 'premium',
}
@Component({
  selector: 'app-no-shop',
  templateUrl: './no-shop.component.html',
  styleUrls: ['./no-shop.component.scss']
})
export class NoShopComponent implements OnInit {
  @ViewChild('dropzone') $dropzone!: ElementRef;
  @ViewChild('inputFile') $inputFile!: ElementRef;

  plan:Plans = PlansTypes.BASIC;

  @Input() id?: string = '';

  noShopForm: FormGroup = this.fb.group({
    name: ['',[Validators.required]],
    shopType: ['#',[Validators.required]],
    phone: ['',[Validators.required]],
    email: ['',[Validators.required]],
    desc: ['',[Validators.required]],
    img:[]
  });
  unShop!: Subscription;
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
    if(this.id){
     this.unShop = this.negocioService.getNegocioById(this.id).pipe(
      take(1),
      map(({negocios})=> negocios),
      catchError(()=> of<Negocio>({}))
      ).subscribe((shop)=>{
        if(typeof shop === undefined) return;
        this.noShopForm.get('name')?.setValue(shop?.nombre)
        this.noShopForm.get('shopType')?.setValue(shop?.tipoNegocio?._id)
        this.address = {exist: true, lngLat:{lng: shop?.direccion?.lng, lat: shop?.direccion?.lat}}
        this.noShopForm.get('phone')?.setValue(shop?.telefono)
        this.noShopForm.get('email')?.setValue(shop?.correo)
        this.noShopForm.get('desc')?.setValue(shop?.descripcion)
      })
    }
  }
  submit(){
    if(this.noShopForm.invalid || this.noShopForm.get('shopType')?.value == '#') return
    if(this.id){
      this.negocioService.putNegocio(this.id,this.noShopForm.value).subscribe(()=>{
        this.saveAddress();
        Swal.fire({title:'Negocio actualizado',icon:'success'})
      });
    }else{
      this.negocioService.postNegocio(this.noShopForm.value).subscribe(()=>{
        this.saveAddress();
      });
    }
  }
  
  saveAddress(){
    if(!this.address.exist) return;
    this.direcciones.postDireccion(this.address.lngLat).subscribe(()=>location.reload())
  }

  changeMarkerMap(lngLat:any){
    this.address = {exist: true, lngLat}
  }

  dropZone() {
    this.$dropzone.nativeElement.classList.toggle('active');
  }

  getFile(event: any) {
    this.noShopForm.get('img')?.setValue(event.target.files[0])
    console.log(this.noShopForm.value);

    const extension = this.noShopForm.get('img')?.value.name.split('.').pop();

    if (!['png','jpg','jpeg'].includes(extension)) {
      this.noShopForm.get('img')?.setValue('');
      this.$dropzone.nativeElement.classList.remove('active');
      this.$inputFile.nativeElement.value = '';
    }

  }
  selectPlan(plan:Plans){
      this.plan = plan;
  }
}
