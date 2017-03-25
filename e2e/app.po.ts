import { browser, element, by } from 'protractor';

export class Ng2SimpleAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getLayoutTitleText() {
    return element(by.css('.mdl-layout-title')).getText();
  };
}
