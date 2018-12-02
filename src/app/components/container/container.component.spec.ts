import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule, MatIconModule, MatTooltipModule, MatCardModule } from '@angular/material';

import { NewsBlockComponent, ContainerComponent, HeaderComponent, InformationBlockComponent } from '../';

describe('ContainerComponent', () => {
  let component: ContainerComponent;
  let fixture: ComponentFixture<ContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MatMenuModule,
        MatIconModule,
        MatTooltipModule,
        MatCardModule
      ],
      declarations: [ ContainerComponent, HeaderComponent,  NewsBlockComponent, InformationBlockComponent],
      providers: [ HttpClientModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component instance', () => {
    expect(component).toBeTruthy();
  });
  it('should consist of HeaderComponent', () => {
    const headerComponent = fixture.debugElement.nativeElement;
    expect(headerComponent.querySelector('app-header')).not.toBe(null);
  });
  it('should consist of NewsBlockComponent', () => {
    const newsBlockomponent = fixture.debugElement.nativeElement;
    expect(newsBlockomponent.querySelector('app-news-block')).not.toBe(null);
  });
});
