import { Component, DoCheck } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { environment } from 'src/environments/environment';
import { Perfil } from '../../../core/interfaces/perfiles/perfil.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements DoCheck {

  perfil: Perfil = {}
  tinpyBackendURL: string = environment.tinpyBackendURL;

  constructor(
    private authService:AuthService
    ) { }
  ngDoCheck(): void {
    this.perfil = this.authService.perfil
  }

}
