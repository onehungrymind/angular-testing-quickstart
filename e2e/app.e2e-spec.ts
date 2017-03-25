import { Ng2SimpleAppPage } from './app.po';

describe('ng2-simple-app App', function() {
  let page: Ng2SimpleAppPage;

  beforeEach(() => {
    page = new Ng2SimpleAppPage();
  });

  it('should display message saying Angular 2 REST Website', () => {
    page.navigateTo();

    page.getLayoutTitleText()
      .then((txt) => {
        expect(txt).toEqual('Angular 2 REST Website');
      });
  });
});
