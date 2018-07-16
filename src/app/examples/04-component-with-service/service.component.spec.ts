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
    // How would you stub out the greeting service?

    fixture = TestBed.configureTestingModule({
      declarations: [ ServiceComponent ],
      providers: [
        // How would you use the value of your stub instead of the real service?
      ]
    })
    .createComponent(ServiceComponent);

    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();

    // How do you get a reference to the component's service?
  });

  it('sets the default `subject` to service `subject`', () => {
    expect(component.subject.name).toBe('world');
  });

  it('greets the default service `subject`', () => {
    const h1 = de.query(By.css('h1')).nativeElement;
    expect(h1.innerText).toBe('Hello world!');
  });

  it('updates component `subject` when service `subject` is changed', () => {
    // How would you set a property on the service?
    // How would you force change detection?
    expect(component.subject.name).toBe('cosmos');
    const h1 = de.query(By.css('h1')).nativeElement;
    expect(h1.innerText).toBe('Hello cosmos!');
  });
});
