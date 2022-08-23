import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('dropzone') $dropzone!: ElementRef;
  @ViewChild('inputFile') $inputFile!: ElementRef;

  noShopForm: FormGroup = this.fb.group({
    name: ['',[Validators.required]],
    shopType: ['#',[Validators.required]],
    phone: ['',[Validators.required]],
    email: ['',[Validators.required]],
    desc: ['',[Validators.required]],
    img:[]
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
}
