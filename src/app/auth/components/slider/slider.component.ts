import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {


  @ViewChild("slider") slider!: ElementRef;
  label: string = 'Registrarse'
  click(){
    this.slider.nativeElement.classList.toggle("active")
    ?this.label = 'Iniciar Sesion'
    :this.label = 'Registrarse'
  }
}
