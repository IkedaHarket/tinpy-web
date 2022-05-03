import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import   Swal from 'sweetalert2';

import { ValidatorService } from 'src/app/shared/validators/validator.service';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  formRegister: FormGroup = this.fb.group({
    correo      :['test1@gmail.com',[Validators.required,Validators.email]],
    password    :['123456',[Validators.required,Validators.minLength(6)]],
    password2   :['123456',[Validators.required,Validators.minLength(6)]],
  },{
    validators  :       [this.validator.camposIguales('password','password2')]
  });
  constructor(
    private fb: FormBuilder,
    private authService:AuthService,
    private validator:ValidatorService
    ){ }
  submit(){
    if(this.formRegister.invalid) return
    const {correo,password} = this.formRegister.value;
    this.authService.postRegisterUser(correo,password).subscribe({
      next: (res)=> console.log('NEXT',res),
      error: ({error})=> {
        Swal.fire({
          'title': error.errors['errors'][0].msg,
          'icon': 'error',
          'showConfirmButton': false,
          'timer': 1500
        })
      },
    })
  }
  tieneError(campo:string):boolean{
    if(this.formRegister.get(campo)?.errors && this.formRegister.controls[campo]?.touched){
      return this.formRegister.get(campo)?.invalid || false;
    }
    return false
  }
}
