import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

}
