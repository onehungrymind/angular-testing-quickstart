import { AngularTestingExamplesPage } from './app.po';

describe('angular-testing-quickstart App', function() {
  let page: AngularTestingExamplesPage;

  beforeEach(() => {
    page = new AngularTestingExamplesPage();
  });

  it('should display message saying Angular 2 REST Website', () => {
    page.navigateTo();

    page.getLayoutTitleText()
      .then((txt) => {
        expect(txt).toEqual('Angular 2 REST Website');
      });
  });
});
