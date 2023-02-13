import { TestBed } from '@angular/core/testing';

import { WttrService } from './wttr.service';

describe('WttrService', () => {
  let service: WttrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WttrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
