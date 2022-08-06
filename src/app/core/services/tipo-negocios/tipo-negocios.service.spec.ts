import { TestBed } from '@angular/core/testing';

import { TipoNegociosService } from './tipo-negocios.service';

describe('TipoNegociosService', () => {
  let service: TipoNegociosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoNegociosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
