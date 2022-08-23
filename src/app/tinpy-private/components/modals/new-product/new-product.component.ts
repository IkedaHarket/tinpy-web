import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductosService } from 'src/app/core/services/productos/productos.service';
import { CategoriaService } from '../../../../core/services/categorias/categoria.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
})
export class NewProductComponent implements OnInit {

  @ViewChild('dropzone') $dropzone!: ElementRef;
  @ViewChild('inputFile') $inputFile!: ElementRef;

  form: FormGroup = this.fb.group({
    nombre      :['',[Validators.required]],
    categoria   :['#'],
    img         :[],
    precio      :['',Validators.required],
    descripcion :['',Validators.required],
  })

  constructor(
    private fb : FormBuilder,
    public categoriaService: CategoriaService,
    public productService: ProductosService,
    ) { }

  ngOnInit(): void {
  }

  save() {
    if(this.form.invalid || this.form.get('categoria')?.value == '#') return;
    console.log(this.form.value);
    this.productService.postProduct({...this.form.value}).subscribe((product)=>{
      location.reload();
    })
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
