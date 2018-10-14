import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Sources } from './../../models/news-sources';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() newsSources: Sources[];
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onClicked = new EventEmitter<string>();

  chooseSourceName(sourceName: string) {
    this.onClicked.emit(sourceName);
  }

}
