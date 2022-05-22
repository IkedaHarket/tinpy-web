import { TestBed } from '@angular/core/testing';

import { ValidarVipGuard } from './validar-vip.guard';

describe('ValidarTokenGuard', () => {
  let guard: ValidarVipGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ValidarVipGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
