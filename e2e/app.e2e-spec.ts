import { NgTippyPage } from './app.po';

describe('ng-tippy App', () => {
  let page: NgTippyPage;

  beforeEach(() => {
    page = new NgTippyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
