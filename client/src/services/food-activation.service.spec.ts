import { TestBed, inject } from '@angular/core/testing';

import { FoodActivationService } from './food-activation.service';

describe('FoodActivationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoodActivationService]
    });
  });

  it('should be created', inject([FoodActivationService], (service: FoodActivationService) => {
    expect(service).toBeTruthy();
  }));
});
