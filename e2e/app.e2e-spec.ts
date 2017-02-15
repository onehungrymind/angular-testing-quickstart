import { Ng2SimpleAppPage } from './app.po';

describe('ng2-simple-app App', function() {
  let page: Ng2SimpleAppPage;

  beforeEach(() => {
    page = new Ng2SimpleAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
