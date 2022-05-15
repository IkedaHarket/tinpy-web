import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsByNegocioViewComponent } from './products-by-negocio-view.component';

describe('ProductsByNegocioViewComponent', () => {
  let component: ProductsByNegocioViewComponent;
  let fixture: ComponentFixture<ProductsByNegocioViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsByNegocioViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsByNegocioViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
