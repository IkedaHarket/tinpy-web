import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  formLogin: FormGroup = this.fb.group({
    correo      :['sebaaignacio111@gmail.com',[Validators.required,Validators.email]],
    password    :['123456',[Validators.required,Validators.minLength(6)]],
  });
  constructor(
    private fb: FormBuilder,
    private authService:AuthService,
    private router:Router,
    ){ }

    submit(){
      if(this.formLogin.invalid) return

      const {correo,password} = this.formLogin.value;

      this.authService.postLogin(correo,password).subscribe({
        next: (res)=>{
          if(res.ok) this.router.navigateByUrl('/vip')
        },
        error: ({error})=> {
          Swal.fire({
            'title': error.errors[0].msg,
            'icon': 'error',
            'showConfirmButton': false,
            'timer': 1500
          })
        },
      })

    }

  tieneError(campo:string):boolean{
    if(this.formLogin.get(campo)?.errors && this.formLogin.controls[campo]?.touched){
      return this.formLogin.get(campo)?.invalid || false;
    }
    return false
  }

}
