/* tslint:disable:no-unused-variable */
import { tick, async, fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AsyncServiceComponent } from './async-service.component';
import { GreetingService } from '../greeting-service/greeting.service';

describe('AsyncServiceComponent', () => {
  let component: AsyncServiceComponent;
  let fixture: ComponentFixture<AsyncServiceComponent>;
  let de: DebugElement;
  let greetingService: GreetingService;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ AsyncServiceComponent ],
      providers: [ GreetingService ]
    })
    .createComponent(AsyncServiceComponent);

    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
    greetingService = de.injector.get(GreetingService);
  });

  it('doesn\'t initialize greeting, subject, and punctuation on ngOnInit', () => {
    fixture.detectChanges();
    expect(component.greeting).toBeUndefined();
    expect(component.subject).toBeUndefined();
    expect(component.punctuation).toBeUndefined();
  });

  it('gets greeting after promise (async)', async(() => {
    spyOn(greetingService, 'getGreeting')
      .and.returnValue(Promise.resolve('Greetings'));

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.greeting).toBe('Greetings');
    });
  }));

  it('gets subject after promise (fakeAsync)', fakeAsync(() => {
    spyOn(greetingService, 'getSubject')
      .and.returnValue(Promise.resolve('universe'));

    fixture.detectChanges();

    tick();

    fixture.detectChanges();

    expect(component.subject).toBe('universe');
  }));

  it('gets punctuation after promise (done) – use with caution', (done) => {
    spyOn(greetingService, 'getPunctuation')
      .and.returnValue(Promise.resolve(' :)'));

    fixture.detectChanges();

    greetingService.getPunctuation().then(() => {
      fixture.detectChanges();
      expect(component.punctuation).toBe(' :)');
      done();
    });
  });
});
