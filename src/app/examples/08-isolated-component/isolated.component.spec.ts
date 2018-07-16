import { IsolatedComponent } from './isolated.component';

describe('IsolatedComponent', () => {
  let component: IsolatedComponent;

  beforeEach(() => component = new IsolatedComponent());

  it('sets the `subject` class member', () => {
    expect(component.subject).toBe('world');
  });
});
