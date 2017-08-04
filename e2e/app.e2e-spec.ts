import { HimejiAppPage } from './app.po';

describe('himeji-app App', () => {
  let page: HimejiAppPage;

  beforeEach(() => {
    page = new HimejiAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
