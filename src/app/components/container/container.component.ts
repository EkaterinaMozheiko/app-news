import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Observable } from 'rxjs';
import { NewsSources } from '../../models/news-sources';
import { NewsResponse } from '../../models/news';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerComponent implements OnInit {
  newsSources$: Observable<NewsSources>;
  newsBySource$: Observable<NewsResponse>;

  constructor(private news: NewsService) { }

  ngOnInit() {
    this.getSources();
    this.getNews();
  }

  getSources() {
    this.newsSources$ = this.news.getNewsSource();
  }

  getNews() {
    this.newsBySource$ = this.news.getAllNews();
  }

  onClicked($event) {
    this.newsBySource$ = this.news.getNewsBySourceName($event.source, $event.language);
  }
}
