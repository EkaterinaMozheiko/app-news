import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatTooltipModule,
  MatCardModule,
  MatDialog,
  MatDialogModule
} from '@angular/material';
import { ShareButtonsModule } from '@ngx-share/buttons';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContainerComponent } from './components/container/container.component';
import { NewsBlockComponent } from './components/news-block/news-block.component';
import { InformationBlockComponent } from './components/information-block/information-block.component';
import { ShareDialogComponent } from './components/share-dialog/share-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    NewsBlockComponent,
    InformationBlockComponent,
    ShareDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatTooltipModule,
    MatCardModule,
    MatDialogModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ShareButtonsModule
  ],
  providers: [MatDialog],
  entryComponents: [ShareDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
