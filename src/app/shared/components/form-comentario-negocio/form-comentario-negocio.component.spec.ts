import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComentarioNegocioComponent } from './form-comentario-negocio.component';

describe('FormComentarioNegocioComponent', () => {
  let component: FormComentarioNegocioComponent;
  let fixture: ComponentFixture<FormComentarioNegocioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormComentarioNegocioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComentarioNegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
