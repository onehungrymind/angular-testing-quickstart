import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from '../../app-material.module';

import { WidgetDetailComponent } from './widget-detail.component';
import { DebugElement } from '@angular/core';
import { WidgetsListComponent } from '../widgets-list/widgets-list.component';

describe('WidgetDetailComponent', () => {
  let fixture: ComponentFixture<WidgetDetailComponent>;
  let de: DebugElement;
  let component: WidgetDetailComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WidgetDetailComponent],
      imports: [FormsModule, BrowserAnimationsModule, AppMaterialModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetDetailComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    component.widget = {id: 100, name: 'item', description: 'item', price: 100};

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
