import { Mo2academiaPage } from './app.po';

describe('mo2academia App', () => {
  let page: Mo2academiaPage;

  beforeEach(() => {
    page = new Mo2academiaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
