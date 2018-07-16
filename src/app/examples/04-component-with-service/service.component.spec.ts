import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ServiceComponent } from './service.component';
import { GreetingService } from './greeting.service';

describe('ServiceComponent', () => {
  let component: ServiceComponent;
  let fixture: ComponentFixture<ServiceComponent>;
  let de: DebugElement;
  let greetingServiceStub;
  let greetingService;

  beforeEach(() => {
    greetingServiceStub = {
      subject: {name: 'world'},
    };

    fixture = TestBed.configureTestingModule({
      declarations: [ ServiceComponent ],
      providers: [{ provide: GreetingService, useValue: greetingServiceStub }]
    })
    .createComponent(ServiceComponent);

    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();

    greetingService = de.injector.get(GreetingService);
  });

  it('sets the default `subject` to service `subject`', () => {
    expect(component.subject.name).toBe('world');
  });

  it('greets the default service `subject`', () => {
    const h1 = de.query(By.css('h1')).nativeElement;
    expect(h1.innerText).toBe('Hello world!');
  });

  it('updates component `subject` when service `subject` is changed', () => {
    greetingService.subject.name = 'cosmos';
    fixture.detectChanges();
    expect(component.subject.name).toBe('cosmos');
    const h1 = de.query(By.css('h1')).nativeElement;
    expect(h1.innerText).toBe('Hello cosmos!');
  });
});
