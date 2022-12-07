import { Component, ElementRef, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Producto } from 'src/app/core/interfaces';
import { ProductosService } from 'src/app/core/services/productos/productos.service';
import { CategoriaService } from '../../../../core/services/categorias/categoria.service';
import { MyProductService } from '../../../services/my-product.service';
import { Categoria } from '../../../../core/interfaces/productos/categorias/categoria.interface';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit, OnDestroy {

  @ViewChild('dropzone') $dropzone!: ElementRef;
  @ViewChild('inputFile') $inputFile!: ElementRef;

  unProdutSelected!: Subscription;
  productSelected: Producto = {};

  form: FormGroup = this.fb.group({
    nombre      :['',[Validators.required]],
    categoria   :['#'],
    img         :[],
    precio      :['',Validators.required],
    descripcion :[''],
  })

  constructor(
    private fb : FormBuilder,
    public categoriaService: CategoriaService,
    public productService: ProductosService,
    public myProduct : MyProductService
    ) { }

  ngOnInit(): void {
    this.unProdutSelected = this.myProduct.productSelected$.subscribe((product)=>{
      this.productSelected = product;
      this.setForm();
    })
  }

  save() {
    if(this.form.invalid || this.form.get('categoria')?.value == '#') return;
    console.log(this.form.value);
    this.productService.putProduct(this.productSelected._id!,{...this.form.value}).subscribe(()=>{
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

  setForm(){
    this.form.get('nombre')?.setValue(this.productSelected.nombre)
    this.form.get('categoria')?.setValue((<Categoria>this.productSelected.categoria)._id)
    this.form.get('precio')?.setValue(this.productSelected.precio)
    this.form.get('descripcion')?.setValue(this.productSelected.descripcion)
  }

  ngOnDestroy(): void {
      this.unProdutSelected.unsubscribe()
  }
}
