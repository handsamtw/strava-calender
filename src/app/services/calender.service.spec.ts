import { TestBed } from '@angular/core/testing';

import { CalenderService } from './calender.service';

describe('CalenderService', () => {
  let service: CalenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
