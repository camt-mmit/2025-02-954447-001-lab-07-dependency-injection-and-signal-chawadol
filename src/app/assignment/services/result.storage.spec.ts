import { TestBed } from '@angular/core/testing';

import { ResultStorage } from './result.storage';

describe('ResultStorage', () => {
  let service: ResultStorage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultStorage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
