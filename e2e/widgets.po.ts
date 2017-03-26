import { browser, element, by } from 'protractor';

export class WidgetsPage {

  getWidgetsList() {
    return element.all(by.css('.mdl-cell')).get(0);
  }

  getWidgets() {
    return this.getWidgetsList().all(by.css('.item-card'))
  }

  getWidget(num: number) {
    return this.getWidgetsList().all(by.css('.item-card')).get(num);
  }

  getWidgetTitleElement(widget) {
    return widget.element(by.css('.mdl-card__title'));
  }

  getWidgetDescriptionElement(widget) {
    return widget.element(by.css('.mdl-card__supporting-text'));
  }

  getWidgetCloseButton(widget) {
    return widget.element(by.tagName('button'));
  }

  getWidgetsCount() {
    return element.all(by.css('.mdl-cell')).get(0).all(by.css('.item-card')).count()
      .then((len) => {
        return len;
      });
  }

  // FORM METHODS
  getFormNameInput() {
    return element(by.tagName('form')).element(by.name('name'));
  }

  getFormDescriptionInput() {
    return element(by.tagName('form')).element(by.name('description'));
  }

  getFormCancelButton() {
    return element(by.tagName('form')).all(by.tagName('button')).get(0);
  }

  getFormSubmitButton() {
    return element(by.tagName('form')).all(by.tagName('button')).get(1);
  }
}
