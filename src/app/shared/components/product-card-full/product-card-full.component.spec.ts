import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardFullComponent } from './product-card-full.component';

describe('ProductCardFullComponent', () => {
  let component: ProductCardFullComponent;
  let fixture: ComponentFixture<ProductCardFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCardFullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
