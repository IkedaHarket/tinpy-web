import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoShopComponent } from './no-shop.component';

describe('NoShopComponent', () => {
  let component: NoShopComponent;
  let fixture: ComponentFixture<NoShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
