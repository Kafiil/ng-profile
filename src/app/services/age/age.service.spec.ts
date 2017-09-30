import { TestBed, inject } from '@angular/core/testing';

import { AgeService } from './age.service';

describe('AgeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgeService]
    });
  });

  it('Should calculate my age right', inject([AgeService], (service:
    AgeService) => {
    const birth = new Date(1990, 0, 3);
    const age = service.calculateAge(birth);
    expect(age).toBe(27);
  }));
});
