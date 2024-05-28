import { TestBed } from '@angular/core/testing';

import { DataService } from './services/data.service';
import { beforeEach, describe } from 'node:test';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
