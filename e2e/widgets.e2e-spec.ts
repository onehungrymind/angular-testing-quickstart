import { AngularTestingExamplesPage } from './app.po';
import { WidgetsPage } from './widgets.po';

describe('Widgets', () => {
  let page:AngularTestingExamplesPage;
  let widgetPage: WidgetsPage;
  let widgetsCount = 0;

  beforeEach(() => {
    page = new AngularTestingExamplesPage();
    widgetPage = new WidgetsPage();

    page.navigateTo('/widgets');

  });

  it('should have widgets', () => {
    widgetPage.getWidgetsCount()
      .then((count) => {
         widgetsCount = count;
         // EXPECT THE DEFAULT DATABASE TO HAVE 3 WIDGETS
         expect(widgetsCount).toEqual(3);
      });

  });

  it('should have a title, description for each widget', () => {
    widgetPage.getWidgetsCount()
      .then((count) => {
         widgetsCount = count;
         // EXPECT THE DEFAULT DATABASE TO HAVE 3 WIDGETS
         expect(widgetsCount).toEqual(3);

         for (let i = 0; i < widgetsCount; i++) {
           const widget = widgetPage.getWidget(i);
           // EXPECT EACH WIDGET TO HAVE A TITLE AND DESCRIPTION ELEMENT
           expect(widgetPage.getWidgetTitleElement(widget)).toBeDefined();
           expect(widgetPage.getWidgetDescriptionElement(widget)).toBeDefined();
         }
      });

  });

  it('should clear form on cancel', () => {
    let startingCount: number;
    let cancel;
    const titleText = 'E2E Widget 0';
    const descText = 'This is Widget 0 for E2E testing.';

    widgetPage.getWidgetsCount()
      .then((count) => {
        startingCount = count;
        widgetsCount = count;
        cancel = widgetPage.getFormCancelButton();

        // EXPECT THE CANCEL BUTTON TO BE DISABLED
        expect(cancel).toBeTruthy();

        widgetPage.getFormNameInput().sendKeys(titleText);
        widgetPage.getFormDescriptionInput().sendKeys(descText);

        return cancel.click();
      })
      .then(() => {
        return widgetPage.getWidgetsCount();
      })
      .then((count) => {
        widgetsCount = count;
        expect(widgetsCount).toEqual(startingCount);

        // EXPECT THE FORM TO BE EMPTY
        widgetPage.getFormNameInput().getText()
          .then((txt) => {
            expect(txt).toEqual('');
          });
        widgetPage.getFormDescriptionInput().getText()
          .then((txt) => {
            expect(txt).toEqual('');
          });
      });

  });

  it('should create a widget', () => {
    let startingCount: number;
    let submit;
    const titleText = 'E2E Widget 0';
    const descText = 'This is Widget 0 for E2E testing.';

    widgetPage.getWidgetsCount()
      .then((count) => {
        startingCount = count;
        widgetsCount = count;
        submit = widgetPage.getFormSubmitButton();

        // EXPECT THE SUBMIT BUTTON TO BE DISABLED
        expect(submit.isEnabled()).toBeFalsy();
        widgetPage.getFormNameInput().sendKeys(titleText);

        // EXPECT THE SUBMIT BUTTON TO NOT BE DISABLED
        expect(submit.isEnabled()).toBeTruthy();
        widgetPage.getFormDescriptionInput().sendKeys(descText);

        return submit.click();
      })
      .then(() => {
        return widgetPage.getWidgetsCount();
      })
      .then((count) => {
        widgetsCount = count;
        expect(widgetsCount).toBeGreaterThan(startingCount);
        expect(widgetsCount - 1).toEqual(startingCount);

        // EXPECT THE SUBMIT BUTTON TO BE DISABLED
        expect(submit.isEnabled()).toBeFalsy();

        // EXPECT THE WIDGET TEXT TO BE WHAT WAS SET
        const widgets = widgetPage.getWidgets();
        const newWidget = widgets.get(widgetsCount - 1);
        expect(widgetPage.getWidgetTitleElement(newWidget).getText()).toEqual(titleText);
        expect(widgetPage.getWidgetDescriptionElement(newWidget).getText()).toEqual(descText);
      });

  });

  it('should delete a widget', () => {
    let startingCount: number;
    widgetPage.getWidgetsCount()
      .then((count) => {
        startingCount = count;
        widgetsCount = count;

        const widgets = widgetPage.getWidgets();
        const close = widgetPage.getWidgetCloseButton(widgets.get(widgetsCount - 1));

        return close.click();
      })
      .then(() => {
        return widgetPage.getWidgetsCount();
      })
      .then((count) => {
        widgetsCount = count;
        expect(widgetsCount).toBeLessThan(startingCount);
        expect(widgetsCount + 1).toEqual(startingCount);
      });
  });

});
