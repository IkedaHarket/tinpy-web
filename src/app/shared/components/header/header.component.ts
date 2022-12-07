import { Component, DoCheck, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { Perfil } from 'src/app/core/interfaces';
import { PerfilesService } from '../../../core/services/perfiles/perfiles.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductosService } from '../../../core/services/productos/productos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,DoCheck {

  public form: FormGroup = this.fb.group({
    query: ['',]
  })

  constructor(
    private authService:AuthService,
    private productService: ProductosService,
    private router:Router,
    private fb: FormBuilder
    ) { }

  tinpyBackendURL: string = environment.tinpyBackendURL;
  perfil: Perfil = {}
  searchInput: Boolean = true;


  ngDoCheck(): void {
    if(window.location.href == 'http://localhost:4200/' || window.location.href == 'http://localhost:4200'){
      this.searchInput = false;
    }else{
      this.searchInput = true;
    }
    this.setDefaultPerfil();
    if(this.authService.perfil.usuario?.uid){
      this.perfil = this.authService.perfil
    }
  }
  ngOnInit(): void {
    this.perfil = this.authService.perfil;
  }

  logout(){
    this.authService.logout();
    this.setDefaultPerfil();
    this.router.navigateByUrl('/auth')
  }
  setDefaultPerfil(){
    this.perfil = {
      img:'default.png',
    }
  }
  searchProducts(){
    if(this.form.invalid) return

    this.productService.getProductosByNamePaginates(this.form.get('query')?.value).subscribe({
      next:({productos})=>{
        console.log(productos);
        if(productos!.docs?.length == 0){
          Swal.fire({
            'title': 'No se encontraron productos para esta busqueda',
            'icon': 'error',
            'showConfirmButton': false,
            'timer': 2000
          })
          return
        }
        localStorage.setItem('searchProducts',this.form.get('query')?.value)
        this.productService.emitSearchedProducts(productos || {})
        this.router.navigateByUrl('/search')
      },
      error:(err)=> console.log(err),
    });
  }
}
