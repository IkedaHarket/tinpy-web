import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/tinpy-public/interfaces/productos/productos-by-name-response.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-card-full',
  templateUrl: './product-card-full.component.html',
  styleUrls: ['./product-card-full.component.scss']
})
export class ProductCardFullComponent implements OnInit {

  tinpyBackendURL: string = environment.tinpyBackendURL;

  @Input()
  producto: Producto = {};

  constructor() { }

  ngOnInit(): void {
    console.log(this.producto);
  }

}
