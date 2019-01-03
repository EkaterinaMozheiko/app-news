import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule, MatDialog, MatDialogModule } from '@angular/material';

import { InformationBlockComponent } from '../';

describe('InformationBlockComponent', () => {
  let component: InformationBlockComponent;
  let fixture: ComponentFixture<InformationBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatIconModule, MatDialogModule ],
      declarations: [ InformationBlockComponent ],
      providers: [ MatDialog ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component instance', () => {
    expect(component).toBeTruthy();
  });
});
