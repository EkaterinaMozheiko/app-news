import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { NewsService } from './news.service';

describe('NewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
    ]
  }));

  it('should be created', () => {
    const service: NewsService = TestBed.get(NewsService);
    expect(service).toBeTruthy();
  });
});
