import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  formRegister: FormGroup = this.fb.group({
    correo      :['',[Validators.required,Validators.email]],
    password    :['',[Validators.required,Validators.minLength(6)]],
    password2   :['',[Validators.required,Validators.minLength(6)]],
  });
  constructor(
    private fb: FormBuilder,
    private authService:AuthService
    ){ }
  submit(){
    console.table(this.formRegister.value)

  }
  tieneError(campo:string):boolean{
    if(this.formRegister.get(campo)?.errors && this.formRegister.controls[campo]?.touched){
      return this.formRegister.get(campo)?.invalid || false;
    }
    return false
  }
}
