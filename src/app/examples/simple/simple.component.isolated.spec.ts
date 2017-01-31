/* tslint:disable:no-unused-variable */
import { SimpleComponent } from './simple.component';

describe('SimpleComponent', () => {
  let component: SimpleComponent;

  beforeEach(() => component = new SimpleComponent());

  it('sets the `subject` class member', () => {
    expect(component.subject).toBe('world');
  });
});
