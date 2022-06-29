import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Perfil } from 'src/app/core/interfaces';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss']
})
export class MenuHeaderComponent implements OnInit {

  @Input() perfil : Perfil = {}
  @Output() logout = new EventEmitter<boolean>();
  active: boolean = false;

  tinpyBackendURL: string = environment.tinpyBackendURL;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  emitLogout(){
    this.toggleActive()
    this.logout.emit(true)
    this.active = false
  }

  toggleActive(){
    this.active = !this.active
  }

  clickImg(){
    if(JSON.stringify(this.perfil).includes('_id') || this.perfil.usuario?.uid){
      this.toggleActive()
    }else{
      this.router.navigateByUrl('/auth')
    }
  }
}
