import { TestBed, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule, MatIconModule, MatTooltipModule, MatCardModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ContainerComponent, HeaderComponent, NewsBlockComponent, InformationBlockComponent } from './components';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MatMenuModule,
        MatIconModule,
        MatTooltipModule,
        MatCardModule
      ],
      declarations: [ AppComponent, ContainerComponent, HeaderComponent, NewsBlockComponent, InformationBlockComponent ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
