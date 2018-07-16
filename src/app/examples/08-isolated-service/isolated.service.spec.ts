import { IsolatedService } from './isolated.service';

describe('IsolatedService', () => {
  // How would you instantiate the service in isolation?

  it('#getGreeting returns a `greeting`', done => {
    service.getGreeting().then((res) => {
      // What can we expect from this call?
      // How do we complete the call?
    });
  });

  it('#getSubject returns current `subject`', done => {
    service.subject = {name: 'infinity'};
    service.getSubject().then((res) => {
      // What can we expect from this call?
      // How do we complete the call?
    });
  });

  it('#getPunctuation returns `punctuation`', done => {
    service.getPunctuation().then((res) => {
      // What can we expect from this call?
      // How do we complete the call?
    });
  });
});
