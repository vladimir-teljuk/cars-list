import { TestBed, inject } from '@angular/core/testing';

import { TransferBrandService } from './transfer-brand.service';

describe('TransferBrandService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransferBrandService]
    });
  });

  it('should be created', inject([TransferBrandService], (service: TransferBrandService) => {
    expect(service).toBeTruthy();
  }));
});
