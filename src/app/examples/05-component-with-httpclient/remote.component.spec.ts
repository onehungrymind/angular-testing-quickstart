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
  all() { return of(noop())}
  create() { return of(noop()) }
  update() { return of(noop()) }
  delete() { return of(noop()) }
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
          {provide: RemoteService, useClass: RemoteServiceStub}
        ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoteComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    service = debugElement.injector.get(RemoteService);
    fixture.detectChanges();
  });

  it('should call remoteService.all on getWidgets', () => {
    spyOn(service, 'all').and.callThrough();

    component.getWidgets();

    expect(service.all).toHaveBeenCalled();
  });

  it('should call remoteService.create on createWidget', () => {
    const mockWidget: Widget = {id: null, name: 'item', description: 'item', price: 100};
    spyOn(service, 'create').and.callThrough();

    component.createWidget(mockWidget);

    expect(service.create).toHaveBeenCalledWith(mockWidget);
  });
});
