import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Subject } from 'rxjs';
import { Sources } from '../../models/news-sources';
import { NewsResponse } from '../../models/news';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  private newsSources$ = new Subject<Sources[]>();
  private newsBySource$ = new Subject<NewsResponse[]>();
  constructor(private news: NewsService) { }

  ngOnInit() {
    this.getSources();
    this.getNews();
  }

  getSources() {
    this.news.getNewsSource()
      .subscribe(newsSources => this.newsSources$.next(newsSources.sources));
  }

  getNews() {
    this.news.getAllNews()
      .subscribe(news => this.newsBySource$.next(news));
  }

  onClicked($event) {
    this.news.getNewsBySourceName($event.source, $event.language)
      .subscribe(news => this.newsBySource$.next(news));
  }
}
