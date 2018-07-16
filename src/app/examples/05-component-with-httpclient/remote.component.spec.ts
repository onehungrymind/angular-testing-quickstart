import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';
import { noop } from 'rxjs/internal-compatibility';

import { RemoteComponent } from './remote.component';
import { RemoteService } from './remote.service';

interface Widget {
  id: number;
  name: string;
  price: number;
  description?: string;
}

class RemoteServiceStub {
  // How would you stub out the RemoteService?
}

describe('RemoteComponent', () => {
  let component: RemoteComponent;
  let fixture: ComponentFixture<RemoteComponent>;
  let debugElement: DebugElement;
  let service: RemoteService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [
          RemoteComponent
        ],
        providers: [
          // How would you use the RemoteServiceStub class?
        ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoteComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    // How would you get a reference to a service on a component?
    fixture.detectChanges();
  });

  it('should call remoteService.all on getWidgets', () => {
    // How would you spy on a method on a class?

    component.getWidgets();

    expect(service.all).toHaveBeenCalled();
  });

  it('should call remoteService.create on createWidget', () => {
    const mockWidget: Widget = {id: null, name: 'item', description: 'item', price: 100};
    // How would you spy on a method on a class?

    component.createWidget(mockWidget);

    expect(service.create).toHaveBeenCalledWith(mockWidget);
  });
});
