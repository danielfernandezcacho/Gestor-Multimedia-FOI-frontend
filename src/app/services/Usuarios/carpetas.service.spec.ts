import { TestBed } from '@angular/core/testing';

import { CarpetasService } from './usuarios.service';

describe('CarpetasService', () => {
  let service: CarpetasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarpetasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
