import { Component, OnChanges, Input } from '@angular/core';
import { NewsResponse } from '../../models/news';

@Component({
  selector: 'app-news-block',
  templateUrl: './news-block.component.html',
  styleUrls: ['./news-block.component.scss']
})
export class NewsBlockComponent implements OnChanges {
  @Input() newsBySource: NewsResponse[];

  ngOnChanges() {

  }

}
