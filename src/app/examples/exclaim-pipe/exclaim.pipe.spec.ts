/* tslint:disable:no-unused-variable */

import { ExclaimPipe } from './exclaim.pipe';

describe('ExclaimPipe', () => {
  const pipe = new ExclaimPipe();
  it('adds an exclamation mark to input', () => {
    expect(pipe.transform('Hello universum magna'))
      .toBeTruthy('Hello universum magna!');
  });
});
