import { Component, Input } from '@angular/core';
import { News } from '../../models/news';
import { MatDialog } from '@angular/material';
import { ShareDialogComponent } from '../share-dialog/share-dialog.component';

@Component({
  selector: 'app-information-block',
  templateUrl: './information-block.component.html',
  styleUrls: ['./information-block.component.scss']
})
export class InformationBlockComponent {
  @Input() news: News;
  isNewsExpanded = false;

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(ShareDialogComponent, {
      data: {
        url: this.news.url
      }
    });
  }

}
