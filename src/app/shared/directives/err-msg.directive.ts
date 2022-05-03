import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrMsgDirective  implements OnInit{

  private _color = '#CB2B65';
  private _mensaje = 'Campo no válido'

  htmlElement: ElementRef<HTMLElement>

  @Input() set color(valor:string){
    this.htmlElement.nativeElement.style.color = valor;
    this._color = valor
  }
  @Input() set mensaje(valor:string){
    this.htmlElement.nativeElement.innerHTML = valor
    this._mensaje = valor
  }
  @Input() set valido(valor:boolean){
    if(valor){
      this.htmlElement.nativeElement.classList.remove('err-msg-hidden');
    }else{
      this.htmlElement.nativeElement.classList.add('err-msg-hidden');
    }
  }


  constructor(
    private el: ElementRef<HTMLElement>
    ) {
    this.htmlElement = el
  }
  ngOnInit(): void {
    this.htmlElement.nativeElement.innerHTML = this._mensaje
    this.htmlElement.nativeElement.style.color = this._color
  }

}
