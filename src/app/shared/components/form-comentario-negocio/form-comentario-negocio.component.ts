import { Component, OnInit, DoCheck } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Perfil } from 'src/app/core/interfaces';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../../auth/services/auth.service';
import { PerfilesService } from '../../../core/services/perfiles/perfiles.service';

@Component({
  selector: 'app-form-comentario-negocio',
  templateUrl: './form-comentario-negocio.component.html',
  styleUrls: ['./form-comentario-negocio.component.scss']
})
export class FormComentarioNegocioComponent implements OnInit {

  formComentario:FormGroup = this.fb.group({
    titulo  : ['', Validators.required],
    animo   : ['#',Validators.required],
    stars   : ['', Validators.required],
    coment  : ['', Validators.required],
  })

  perfil:Perfil = {}
  tinpyBackendURL: string = environment.tinpyBackendURL;
  constructor(
    private fb:FormBuilder,
    private authService:AuthService,
    private perfilService:PerfilesService
    ) { }

  ngOnInit(): void {
    this.perfil = this.perfilService.perfil
  }


}
