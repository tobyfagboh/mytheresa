class homeMytheresaPage {
  elements = {
    myaccountBtn: () => cy.get('#myaccount'),
    usernameInput: () => cy.get('#qa-login-email > #email'),
    passwordInput: () => cy.get('#qa-login-password > #pass'),
    loginBtn: () => cy.get('#qa-login-button > #send2'),
    errorMessage: () => cy.get('.error-msg > ul > li > span')
  };

  typeUsername(username) {
    this.elements.usernameInput().type(username, { force: true });
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  clickMyaccount() {
    this.elements.myaccountBtn().click();
  }

  clickLogin() {
    this.elements.loginBtn().click();
  }
}

module.exports = new homeMytheresaPage();
