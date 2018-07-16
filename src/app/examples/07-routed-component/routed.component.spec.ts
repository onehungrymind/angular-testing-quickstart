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
          // How would you use the stub classes
        ]
      })
      .createComponent(RoutedComponent);

    component = fixture.componentInstance;
    router = fixture.debugElement.injector.get(Router);
    // How would you get a referece to the ActivatedRoute instance?

    fixture.detectChanges();
  });

  it('#goToItems navigates to `/items`', () => {
    // What would you need to spy on when the router is navigating to a URL?
    component.goToItems();
    // What should have your spy been called with?
  });

  it('sets the `subject` based on route parameters', () => {
    // Based on the ActivatedRouteStub, what do we know about component.subject?
  });

});
