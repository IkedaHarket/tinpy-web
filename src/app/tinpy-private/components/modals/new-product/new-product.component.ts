import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
})
export class NewProductComponent implements OnInit {

  @ViewChild('dropzone') $dropzone!: ElementRef;
  @ViewChild('inputFile') $inputFile!: ElementRef;

  form: FormGroup = this.fb.group({
    name        :['',[Validators.required]],
    phone       :['',],
    descripcion :['',],
    enlace      :['',],
    img         :['',],
  })

  constructor(
    private fb : FormBuilder,
    
    ) { }

  ngOnInit(): void {
  }

  save() {
    if(this.form.invalid) return;
    console.log(this.form.value);

  }

  dropZone() {
    this.$dropzone.nativeElement.classList.toggle('active');
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
}
