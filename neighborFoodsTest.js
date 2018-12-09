describe('registration', function() {
    it('should visit neighborfoods and find the log in button', function() {
      browser.waitForAngularEnabled(false);
      browser.get('https://neighborfoods.herokuapp.com/');
      expect(element(by.css('.login')).getText()).toMatch(/Log In/);
      expect(element(by.css('.header-buttons')).all(by.css('button.landing-button')).getText()).toMatch(/Sign Up/);
    });
  });
