import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Perfil } from 'src/app/core/interfaces';
import { PerfilesService } from 'src/app/core/services/perfiles/perfiles.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  @ViewChild('dropzone') $dropzone!: ElementRef;
  @ViewChild('inputFile') $inputFile!: ElementRef;
  perfilData : Perfil = {};
  form: FormGroup = this.fb.group({
    name        :['',[Validators.required]],
    phone       :['',],
    descripcion :['',],
    enlace      :['',],
    img         :['',],
  })

  constructor(
    private fb: FormBuilder,
    private perfilService: PerfilesService
    ) { }

  ngOnInit(): void {
    this.perfilData = this.perfilService.perfil
    this.setInitialData();
  }

  save() {
    console.log(this.form.value);
    if(this.perfilData._id){
      this.perfilService.editProfile(this.perfilData._id,this.form.value).subscribe({
        next: ({perfil}) => {
          window.location.reload()
        }
      })
    }else{
      console.log('as');
      this.perfilService.postProfile(this.form.value).subscribe({
        next: ({perfil}) => {
          window.location.reload()
        }
      })
    }

  }


  getFile(event: any) {
    this.form.get('img')?.setValue(event.target.files[0])
    console.log(this.form.value);

    const extension = this.form.get('img')?.value.name.split('.').pop();

    if (!['png','jpg','jpeg'].includes(extension)) {
      this.form.get('img')?.setValue('');
      this.$dropzone.nativeElement.classList.remove('active');
      this.$inputFile.nativeElement.value = '';
    }

  }

  dropZone() {
    this.$dropzone.nativeElement.classList.toggle('active');
  }

  handleMessage() {

  }

  setInitialData(){
    this.form.get('name')?.setValue(this.perfilData.nombre);
    this.form.get('phone')?.setValue(this.perfilData.telefono);
    this.form.get('descripcion')?.setValue(this.perfilData.descripcion);
    this.form.get('enlace')?.setValue(this.perfilData.enlace);
  }
}
