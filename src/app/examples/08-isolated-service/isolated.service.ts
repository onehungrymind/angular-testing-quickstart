import { Injectable } from '@angular/core';

@Injectable()
export class IsolatedService {
  subject: {name: string} = { name: 'world' };
  getGreeting() { return Promise.resolve('Hello'); }
  getSubject() { return Promise.resolve(this.subject.name); }
  getPunctuation() { return Promise.resolve('!'); }
}
