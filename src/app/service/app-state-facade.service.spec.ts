import { TestBed } from '@angular/core/testing';

import { AppStateFacadeService } from './app-state-facade.service';

describe('AppStateFacadeService', () => {
  let service: AppStateFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppStateFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
