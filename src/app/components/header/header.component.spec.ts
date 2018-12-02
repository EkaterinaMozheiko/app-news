import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatMenuModule, MatIconModule, MatTooltipModule } from '@angular/material';

import { HeaderComponent } from '../';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatMenuModule, MatIconModule, MatTooltipModule ],
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component instance', () => {
    expect(component).toBeTruthy();
  });
});
