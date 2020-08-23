import { TestBed } from '@angular/core/testing';

import { BlogserService } from './blogser.service';

describe('BlogserService', () => {
  let service: BlogserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
