/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';

import { ActivatedRouteStub } from './activated-route-stub';
import { RoutedComponent } from './routed.component';

class RouterStub {
  navigateByUrl(url) { return url; }
}

describe('RoutedComponent', () => {
  let component: RoutedComponent;
  let fixture: ComponentFixture<RoutedComponent>;
  let router: Router;
  let activatedRoute: ActivatedRouteStub;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ RoutedComponent ],
      providers: [
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub }
      ]
    })
    .createComponent(RoutedComponent);

    component = fixture.componentInstance;
    router = fixture.debugElement.injector.get(Router);
    activatedRoute = fixture.debugElement.injector.get(ActivatedRoute);
    fixture.detectChanges();
  });

  it('#goToItems navigates to /items', () => {
    spyOn(router, 'navigateByUrl');
    component.goToItems();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/items');
  });

  it('sets the subject based on route parameters', () => {
    activatedRoute.testParams = {subject: 'planet'};
    expect(component.subject).toBe('planet');
  });

});
