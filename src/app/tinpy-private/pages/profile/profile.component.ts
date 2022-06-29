import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AuthService } from 'src/app/auth/services/auth.service';
import { environment } from 'src/environments/environment';
import { Perfil } from '../../../core/interfaces/perfiles/perfil.interface';
import { EditProfileComponent } from '../../components/modals/edit-profile/edit-profile.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers:[DialogService]
})
export class ProfileComponent implements DoCheck, OnDestroy {

  perfil: Perfil = {}
  tinpyBackendURL: string = environment.tinpyBackendURL;
  refModal: any;
  constructor(
    private authService:AuthService,
    public dialogService: DialogService,
    ) { }
  ngDoCheck(): void {
    this.perfil = this.authService.perfil
  }
  openModalEdit(){
    this.refModal = this.dialogService.open(EditProfileComponent, {
      header: 'Editar Perfil',
      width: '70%',
      contentStyle: {"height": "auto", "overflow": "auto"},
      baseZIndex: 10000,
      closeOnEscape:true
    });
  }
  ngOnDestroy() {
    if (this.refModal) this.refModal.close()
  }
}
