import { Component, OnInit, Input } from '@angular/core';
import { News } from '../../models/news';

@Component({
  selector: 'app-information-block',
  templateUrl: './information-block.component.html',
  styleUrls: ['./information-block.component.scss']
})
export class InformationBlockComponent implements OnInit {
  @Input() news: News;
  isNewsExpanded = false;
  constructor() { }

  ngOnInit() {
  }

}
