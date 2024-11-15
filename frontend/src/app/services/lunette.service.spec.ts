import { TestBed } from '@angular/core/testing';

import { LunetteService } from './lunette.service';

describe('LunetteService', () => {
  let service: LunetteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LunetteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
