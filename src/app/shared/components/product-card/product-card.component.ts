import { Component, OnInit, Input } from '@angular/core';
import { Producto } from 'src/app/core/interfaces/productos/productos-by-name-response.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input()
  producto: Producto = {}
  tinpyBackendURL: string = environment.tinpyBackendURL;

}
