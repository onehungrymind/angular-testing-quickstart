export class AsyncGreetingService {
  getGreeting() { return Promise.resolve('Hello') }
  getSubject() { return Promise.resolve('world') }
  getPunctuation() { return Promise.resolve('!') }
}