import { TestBed, inject } from '@angular/core/testing';

import { AgeService } from './age.service';

describe('AgeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgeService]
    });
  });

  it('Should calculate my age at a provided date', inject([AgeService], (service:
    AgeService) => {
    const birth = new Date(1990, 0, 3);
    const age = service.calculateAge(birth, new Date(1998, 7, 31));
    expect(age).toBe(8);
  }));

  it('Should calculate my age based on the current date', inject([AgeService], (service:
    AgeService) => {
    const birth = new Date(1990, 0, 3);
    const age = service.calculateAge(birth);
    expect(age >= 27).toBe(true);
  }));
});
