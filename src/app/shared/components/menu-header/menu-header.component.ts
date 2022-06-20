import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

  emitLogout(){
    this.logout.emit(true)
    this.active = false
  }
  toggleActive(){
    this.active = !this.active
  }
}
