import { AngularTestingExamplesPage } from './app.po';

describe('Navigation', function() {
  let page: AngularTestingExamplesPage;

  beforeEach(() => {
    page = new AngularTestingExamplesPage();
  });

  it('should navigate to the Widgets page from the Items page and back', () => {
    page.navigateTo();

    // EXPECTING THE CREATE FORM TITLE TO CONTAIN 'Item'
    expect(page.getCreateCardTitle().getText()).toContain('Item');

    page.navigateTo('/widgets');

    let navLinks = [];

    page.getNavLinks()
      .then((links) => {
        navLinks = links;
        // EXPECTING 2 LINKS AT THE TOP RIGHT
        expect(links.length).toEqual(2);
        return navLinks[1].click();
      })
      .then(() => {
        // EXPECTING THE CREATE FORM TITLE TO CONTAIN 'Widget'
        expect(page.getCreateCardTitle().getText()).toContain('Widget');
        return navLinks[0].click();
      })
      .then(() => {
        // EXPECTING THE CREATE FORM TITLE TO CONTAIN 'Item'
        expect(page.getCreateCardTitle().getText()).toContain('Item');
      });
  });
});
