import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RoutedComponent } from './routed.component';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

class RouterStub {
  navigateByUrl(url) {
    return url;
  }
}

class ActivatedRouteStub {
  private subject = new BehaviorSubject({subject: 'planet'});
  params = this.subject.asObservable();
}

describe('RoutedComponent', () => {
  let component: RoutedComponent;
  let fixture: ComponentFixture<RoutedComponent>;
  let router: Router;
  let activatedRoute: ActivatedRoute;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
        declarations: [RoutedComponent],
        providers: [
          {provide: Router, useClass: RouterStub},
          {provide: ActivatedRoute, useClass: ActivatedRouteStub}
        ]
      })
      .createComponent(RoutedComponent);

    component = fixture.componentInstance;
    router = fixture.debugElement.injector.get(Router);
    activatedRoute = fixture.debugElement.injector.get(ActivatedRoute);

    fixture.detectChanges();
  });

  it('#goToItems navigates to `/items`', () => {
    spyOn(router, 'navigateByUrl');
    component.goToItems();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/items');
  });

  it('sets the `subject` based on route parameters', () => {
    expect(component.subject).toBe('planet');
  });

});
