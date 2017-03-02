import { PracticasPage } from './app.po';

describe('practicas App', () => {
  let page: PracticasPage;

  beforeEach(() => {
    page = new PracticasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
