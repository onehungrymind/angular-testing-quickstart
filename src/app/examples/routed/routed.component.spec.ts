/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RoutedComponent } from './routed.component';

class RouterStub {
  navigateByUrl(url) { return url; }
}
describe('RoutedComponent', () => {
  let component: RoutedComponent;
  let fixture: ComponentFixture<RoutedComponent>;
  let router: Router;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ RoutedComponent ],
      providers: [{ provide: Router, useClass: RouterStub }]
    })
    .createComponent(RoutedComponent);

    component = fixture.componentInstance;
    router = fixture.debugElement.injector.get(Router);
    fixture.detectChanges();
  });

  it('#goToItems navigates to /items', () => {
    spyOn(router, 'navigateByUrl');
    component.goToItems();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/items');
  });

});
