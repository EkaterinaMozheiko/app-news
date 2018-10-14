import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Subject } from 'rxjs';
import { Sources } from '../../models/news-sources';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  private readonly newsSources$ = new Subject<Sources[]>();

  constructor(private news: NewsService) { }

  ngOnInit() {
    this.getSources();
  }

  getSources() {
    this.news.getNewsSource()
      .subscribe(newsSources => this.newsSources$.next(newsSources.sources));
  }

  onClicked($event) {
    console.log($event);
  }
}
