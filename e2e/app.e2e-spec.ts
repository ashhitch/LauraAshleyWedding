import { LauraAshleyPage } from './app.po';

describe('laura-ashley App', () => {
  let page: LauraAshleyPage;

  beforeEach(() => {
    page = new LauraAshleyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
