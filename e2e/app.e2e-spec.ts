import { AppPage } from './app.po';

describe('ng-portfolio App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Should display my name', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Kafil Nasdami');
  });
});
