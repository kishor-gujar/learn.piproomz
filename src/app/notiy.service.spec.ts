import { TestBed, inject } from '@angular/core/testing';

import { NotiyService } from './notiy.service';

describe('NotiyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotiyService]
    });
  });

  it('should be created', inject([NotiyService], (service: NotiyService) => {
    expect(service).toBeTruthy();
  }));
});
