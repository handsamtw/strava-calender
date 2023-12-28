import { TestBed } from '@angular/core/testing';

import { CalanderService } from './calander.service';

describe('CalanderService', () => {
  let service: CalanderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalanderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
