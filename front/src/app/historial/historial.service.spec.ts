/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HistorialService } from './historial.service';

describe('Service: Historial', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HistorialService]
    });
  });

  it('should ...', inject([HistorialService], (service: HistorialService) => {
    expect(service).toBeTruthy();
  }));
});
