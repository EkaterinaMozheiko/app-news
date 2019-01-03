import { TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ShareButtonsModule } from '@ngx-share/buttons';

import { NewsService } from './news.service';
import { ShareDialogComponent } from '../components/share-dialog/share-dialog.component';
import { expectedNewsSources, expectedNews } from './../mocks/news-service-mocks';

describe('NewsService', () => {
  let newsService: NewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatDialogModule,
        ShareButtonsModule
      ],
      declarations: [ ShareDialogComponent ],
      providers: [ MatDialog, NewsService ]
    });
    newsService = TestBed.get(NewsService);
  });

  it('should be created', () => {
    expect(newsService).toBeTruthy();
  });

  it('should return the news source', () => {
    newsService.getNewsSource().subscribe((data) => {
      expect(data).toEqual(expectedNewsSources);
    });
  });

  it('should return the all news', () => {
    newsService.getAllNews().subscribe((data) => {
      expect(data).toEqual(expectedNews);
    });
  });

  it('should return the news by source name', () => {
    newsService.getNewsBySourceName('TechCrunch', 'en').subscribe((data) => {
      expect(data).toEqual(expectedNews);
    });
  });
});
