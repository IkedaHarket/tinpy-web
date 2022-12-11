import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Negocio } from '../../core/interfaces/negocios/negocio.interface';

@Injectable({
  providedIn: 'root'
})
export class MyShopService {

  private _negocioSelected = new BehaviorSubject<Negocio>({})
  public negocioSelected$ = this._negocioSelected.asObservable();
  
  constructor() { }

  emitNegocioSelected(negocio : Negocio) :void {
    this._negocioSelected.next(negocio);
  }
}
