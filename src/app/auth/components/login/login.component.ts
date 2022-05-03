import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  formLogin: FormGroup = this.fb.group({
    correo      :['',[Validators.required,Validators.email]],
    password    :['',[Validators.required,Validators.minLength(6)]],
  });
  constructor(
    private fb: FormBuilder,
    private authService:AuthService
    ){ }
  submit(){
    console.table(this.formLogin.value)

  }
  tieneError(campo:string):boolean{
    if(this.formLogin.get(campo)?.errors && this.formLogin.controls[campo]?.touched){
      return this.formLogin.get(campo)?.invalid || false;
    }
    return false
  }

}
