import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarioProfileComponent } from './comentario-profile.component';

describe('ComentarioProfileComponent', () => {
  let component: ComentarioProfileComponent;
  let fixture: ComponentFixture<ComentarioProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentarioProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentarioProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
