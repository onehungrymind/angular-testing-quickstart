import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ActivatedRouteStub {
  private subject = new BehaviorSubject({subject: 'planet'});
  params = this.subject.asObservable();
}
