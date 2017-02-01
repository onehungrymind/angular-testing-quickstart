import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ActivatedRouteStub {
  private subject = new BehaviorSubject({subject: 'planet'});
  params = this.subject.asObservable();
}
