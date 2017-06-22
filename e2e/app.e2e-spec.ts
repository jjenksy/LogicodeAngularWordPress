import { LogicodeAngularWordPressPage } from './app.po';

describe('logicode-angular-word-press App', () => {
  let page: LogicodeAngularWordPressPage;

  beforeEach(() => {
    page = new LogicodeAngularWordPressPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
