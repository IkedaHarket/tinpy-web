import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map-address',
  templateUrl: './map-address.component.html',
  styles: [`
    .mapa-container{
      width:450px;
      height:250px;
      margin:auto;
    }
  `]
})
export class MapAddressComponent implements AfterViewInit {

  @Output() lngLat = new EventEmitter<{lng:number; lat:number}>();
  
  @ViewChild('mapa') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;

  zoomLevel:number = 15;
  center:[number,number] = [-70.72013731777112,-34.16924769764237]

  markers:mapboxgl.Marker[] = [];

  constructor() { }

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center:this.center,
      zoom:this.zoomLevel
    });
    // this.leerMarcadoresLocalStorage();
    this.mapa.on('click',({lngLat})=>{
      if (this.markers !==null ) {
        for (var i = this.markers.length - 1; i >= 0; i--) {
          this.markers[i].remove();
        }
      }
      const marker = new mapboxgl.Marker()
      .setLngLat(lngLat)
      .addTo(this.mapa)
      this.markers.push(marker);
      this.lngLat.emit({lng: lngLat.lng, lat: lngLat.lat})
    })
  }
  
}
