import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from '../app-material.module';
import { of } from 'rxjs/internal/observable/of';

import { WidgetsService } from '../shared';
import { WidgetsComponent } from './widgets.component';
import { WidgetsListComponent } from './widgets-list/widgets-list.component';
import { WidgetDetailComponent } from './widget-detail/widget-detail.component';

class WidgetsServiceStub {
  all() { return of([]) }
}

describe('WidgetsComponent', () => {
  let component: WidgetsComponent;
  let fixture: ComponentFixture<WidgetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WidgetsComponent,
        WidgetsListComponent,
        WidgetDetailComponent
      ],
      providers: [
        {provide: WidgetsService, useClass: WidgetsServiceStub}
      ],
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        AppMaterialModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
