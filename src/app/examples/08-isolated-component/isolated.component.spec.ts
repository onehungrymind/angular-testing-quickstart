import { IsolatedComponent } from './isolated.component';

describe('IsolatedComponent', () => {
  let component: IsolatedComponent;

  beforeEach(() => {
    // How would you instantiate the component in isolation?
  });

  it('sets the `subject` class member', () => {
    expect(component.subject).toBe('world');
  });
});
