import { TestBed, inject } from '@angular/core/testing';

import {  ProductoServiceService } from './producto-service.service';

describe('ClienteServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductoServiceService]
    });
  });

  it('should be created', inject([ProductoServiceService], (service: ProductoServiceService) => {
    expect(service).toBeTruthy();
  }));
});