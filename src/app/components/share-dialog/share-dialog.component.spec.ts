import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ShareButtonsModule } from '@ngx-share/buttons';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareDialogComponent } from './share-dialog.component';
import { MatDialogModule, MatDialog, MAT_DIALOG_DATA } from '@angular/material';

describe('ShareDialogComponent', () => {
  let component: ShareDialogComponent;
  let fixture: ComponentFixture<ShareDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ShareButtonsModule, MatDialogModule, HttpClientModule ],
      declarations: [ ShareDialogComponent ],
      providers: [ MatDialog, HttpClient, { provide: MAT_DIALOG_DATA, useValue: {} }, ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
