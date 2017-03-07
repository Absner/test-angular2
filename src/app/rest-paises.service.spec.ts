import { TestBed, inject } from '@angular/core/testing';
import { RestPaisesService } from './rest-paises.service';

describe('RestPaisesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestPaisesService]
    });
  });

  it('should ...', inject([RestPaisesService], (service: RestPaisesService) => {
    expect(service).toBeTruthy();
  }));
});
