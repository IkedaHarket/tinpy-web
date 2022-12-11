import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HorariosService } from 'src/app/core/services/horarios/horarios.service';
import { MyShopService } from 'src/app/tinpy-private/services/my-shop.service';
import { Subscription } from 'rxjs';
import { Negocio } from '../../../../core/interfaces/negocios/negocio.interface';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.scss']
})
export class HorarioComponent implements OnInit, OnDestroy {

  horarioForm: FormGroup = this.fb.group({
    id:[''],
    lunes_inicio:['',Validators.required],
    lunes_cierre:['',Validators.required],
    martes_inicio:['',Validators.required],
    martes_cierre:['',Validators.required],
    miercoles_inicio:['',Validators.required],
    miercoles_cierre:['',Validators.required],
    jueves_inicio:['',Validators.required],
    jueves_cierre:['',Validators.required],
    viernes_inicio:['',Validators.required],
    viernes_cierre:['',Validators.required],
    sabado_inicio:['',Validators.required],
    sabado_cierre:['',Validators.required],
    domingo_inicio:['',Validators.required],
    domingo_cierre:['',Validators.required],
  })

  unHorario !: Subscription;
  // horario !: Horario;
  unMyShop!: Subscription;
  myShop!: Negocio;

  constructor(
    private fb: FormBuilder,
    private horarioService : HorariosService,
    private myShopService: MyShopService,
    ) { }
    
    ngOnInit(): void {
      this.unMyShop = this.myShopService.negocioSelected$.subscribe((shop)=> this.myShop = shop)
      this.unHorario = this.horarioService.getHorariosById(this.myShop?._id!).subscribe((h)=>{
        console.log('Horario',h);
        if(!h) return
        this.horarioForm.get('id')?.setValue(h._id)
        this.horarioForm.get('lunes_inicio')?.setValue(h.lunes_inicio)
        this.horarioForm.get('lunes_cierre')?.setValue(h.lunes_cierre)
        this.horarioForm.get('martes_inicio')?.setValue(h.martes_inicio)
        this.horarioForm.get('martes_cierre')?.setValue(h.martes_cierre)
        this.horarioForm.get('miercoles_inicio')?.setValue(h.miercoles_inicio)
        this.horarioForm.get('miercoles_cierre')?.setValue(h.miercoles_cierre)
        this.horarioForm.get('jueves_inicio')?.setValue(h.jueves_inicio)
        this.horarioForm.get('jueves_cierre')?.setValue(h.jueves_cierre)
        this.horarioForm.get('viernes_inicio')?.setValue(h.viernes_inicio)
        this.horarioForm.get('viernes_cierre')?.setValue(h.viernes_cierre)
        this.horarioForm.get('sabado_inicio')?.setValue(h.sabado_inicio)
        this.horarioForm.get('sabado_cierre')?.setValue(h.sabado_cierre)
        this.horarioForm.get('domingo_inicio')?.setValue(h.domingo_inicio)
        this.horarioForm.get('domingo_cierre')?.setValue(h.domingo_cierre)
      })
    }
    save(){
      if(this.horarioForm.invalid) return
      if(this.horarioForm.get('id')?.value){
        this.horarioService.putHorario(this.horarioForm.get('id')?.value ,this.horarioForm.value).subscribe((resp) => {
          window.location.reload()
        })
      }else{
        this.horarioService.postHorario(this.horarioForm.value).subscribe((resp) => {
          window.location.reload()
        })
      }
    }
    ngOnDestroy(): void {
      this.unMyShop.unsubscribe();
      this.unHorario.unsubscribe();
    }
}
