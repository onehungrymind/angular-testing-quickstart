import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AsyncServiceComponent } from './async-service.component';
import { AsyncService } from './async.service';

describe('AsyncServiceComponent', () => {
  let component: AsyncServiceComponent;
  let fixture: ComponentFixture<AsyncServiceComponent>;
  let de: DebugElement;
  let asyncService: AsyncService;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
        declarations: [AsyncServiceComponent],
        providers: [AsyncService]
      })
      .createComponent(AsyncServiceComponent);

    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
    asyncService = de.injector.get(AsyncService);
  });

  it('should ensure `greeting`, `subject`, or `punctuation` are initially undefined', () => {
    expect(component.greeting).toBeUndefined();
    expect(component.subject).toBeUndefined();
    expect(component.punctuation).toBeUndefined();
  });

  it('gets `greeting` after promise (async)', async(() => {
    spyOn(asyncService, 'getGreeting')
      .and.returnValue(Promise.resolve('Greetings'));

    fixture.detectChanges();

    fixture.whenStable()
      .then(() => {
        expect(component.greeting).toBe('Greetings');
      });
  }));

  it('gets `subject` after promise (fakeAsync)', fakeAsync(() => {
    spyOn(asyncService, 'getSubject')
      .and.returnValue(Promise.resolve('universe'));

    fixture.detectChanges();
    tick();

    expect(component.subject).toBe('universe');
  }));

  it('gets `punctuation` after promise (done) – use with caution', done => {
    spyOn(asyncService, 'getPunctuation')
      .and.returnValue(Promise.resolve(' :)'));

    fixture.detectChanges();
    asyncService.getPunctuation()
      .then(() => {
        expect(component.punctuation).toBe(' :)');
        done();
      });
  });
});
