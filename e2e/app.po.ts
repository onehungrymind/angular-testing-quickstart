import { browser, element, by } from 'protractor';

export class AngularTestingExamplesPage {
  navigateTo(link?: string) {
    if(link === undefined) {
      return browser.get('/');
    } else {
      return browser.get(link);
    }
  }

  getLayoutTitleText() {
    return element(by.css('.mdl-layout-title')).getText();
  };

  getNavLinks() {
    return element.all(by.css('.mdl-navigation__link'));
  }

  getCreateCardTitle() {
    let form = element(by.tagName('form'));
    return form.element(by.css('.mdl-card__title-text'));
  }

  getCardTitles() {
    return element.all(by.css('.mdl-card__title-text'));
  }
}
