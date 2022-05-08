import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../../interfaces/productos/productos-by-name-response.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  productos : Producto[] = [];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( ()=> {
      if(!window.history.state.productos){
        this.productos = JSON.parse(localStorage.getItem('searchQuery') || '[]');
      }else{
        this.productos = window.history.state.productos
      }
    })
    localStorage.setItem('searchQuery',JSON.stringify(this.productos))
    console.log(this.productos);
  }

}
