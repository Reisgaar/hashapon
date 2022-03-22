import { TestBed } from '@angular/core/testing';

import { GachaponService } from './gachapon.service';

describe('GachaponService', () => {
  let service: GachaponService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GachaponService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
