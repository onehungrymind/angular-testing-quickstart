import { IsolatedPipe } from './isolated.pipe';

describe('IsolatedPipe', () => {
  const pipe = new IsolatedPipe();
  it('adds an exclamation mark to input', () => {
    expect(pipe.transform('Hello universum magna'))
      .toBeTruthy('Hello universum magna!');
  });
});
