import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Horario, Negocio, Perfil } from 'src/app/core/interfaces';
import { HorariosService } from 'src/app/core/services/horarios/horarios.service';
import { NegociosService } from 'src/app/core/services/negocios/negocios.service';
import { environment } from 'src/environments/environment';
import { HorarioComponent } from '../../components/modals/horario/horario.component';
import { MyShopService } from '../../services/my-shop.service';

@Component({
  selector: 'app-my-shop',
  templateUrl: './my-shop.component.html',
  styleUrls: ['./my-shop.component.scss'],
  providers:[DialogService]
})
export class MyShopComponent implements OnInit {

  perfil: Perfil = {}
  shop: Negocio = {}
  noShop : boolean = false;
  tinpyBackendURL: string = environment.tinpyBackendURL;
  drawPromedioEstrellas: string[] = [];
  horario: Horario = {};
  lngLat: [number,number] = [0,0];
  editShop: boolean = false;
  refModal!:DynamicDialogRef;

  constructor(
    private authService:AuthService,
    private negociosService: NegociosService,
    private horarioService: HorariosService,
    public dialogService: DialogService,
    private myShopService: MyShopService 
    ) { }

  ngOnInit(): void {
    this.perfil = this.authService.perfil
    this.negociosService.getNegocioByIdUser(this.perfil.usuario?.uid!).subscribe({
      next: ({negocios})=>{
        this.shop = negocios || {};
        console.log(negocios);
        this.lngLat = [Number(negocios?.direccion?.lng) || 0, Number(negocios?.direccion?.lat) || 0]
        this.setHorario(this.shop._id!);
      },
      error:()=>{
        this.noShop = true;
      }
    })
  }

  setHorario(id:string){
    this.horarioService.getHorariosById(id).subscribe({
      next:(horario) => this.horario = horario,
      error:(err) => console.log('Error al obtener horario',err),
    })
  }

  openModalEditShop(){
    this.editShop = !this.editShop;
  }

  openModalHorario(){
    this.myShopService.emitNegocioSelected(this.shop)
    this.refModal = this.dialogService.open(HorarioComponent, {
      header: 'Horario',
      width: '50%',
      contentStyle: {"height": "auto", "overflow": "auto"},
      baseZIndex: 10000,
      closeOnEscape:true,
    });
  }
}
