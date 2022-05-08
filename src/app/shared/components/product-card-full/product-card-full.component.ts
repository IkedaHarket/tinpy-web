import { Component, Input } from '@angular/core';
import { Producto } from 'src/app/tinpy-public/interfaces/productos/productos-by-name-response.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-card-full',
  templateUrl: './product-card-full.component.html',
  styleUrls: ['./product-card-full.component.scss']
})
export class ProductCardFullComponent {

  tinpyBackendURL: string = environment.tinpyBackendURL;

  @Input()
  producto: Producto = {};

}
