/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RotasService } from './rotas.service';

describe('Service: Rotas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RotasService]
    });
  });

  it('should ...', inject([RotasService], (service: RotasService) => {
    expect(service).toBeTruthy();
  }));
});
