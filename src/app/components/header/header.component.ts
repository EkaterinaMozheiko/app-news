import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { NewsService } from './../../services/news.service';
import { Sources } from './../../models/news-sources';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private readonly newsSources$ = new Subject<Sources[]>();

  constructor(private news: NewsService) { }

  ngOnInit() {
    this.getSources();
  }

  getSources() {
    this.news.getNewsSource()
      .subscribe(newsSources => this.newsSources$.next(newsSources.sources));
  }

}
