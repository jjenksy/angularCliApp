import { LogicodeAngularCliPage } from './app.po';

describe('logicode-angular-cli App', () => {
  let page: LogicodeAngularCliPage;

  beforeEach(() => {
    page = new LogicodeAngularCliPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
