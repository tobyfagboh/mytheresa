    let number = parseInt(Math.random()*10000000, 10);
    let phone_number = '0803' + number;
    let email = phone_number + '@yopmail.com';

class createAcctPage {

    elements = {
        myAccount: () => cy.get('#myaccount'),
        selectInitials: () => cy.get('#qa-registration-form-prefix > label'),
        academicTitle: () =>cy.get('#suffix'),
        firstName: () => cy.get('#firstname'),
        lastName: () => cy.get('#lastname'),
        emailAddress: () => cy.get('#email_address'),
        password: () => cy.get('#password'),
        confirmPassword: () => cy.get('#confirmation'),
        registerBtn: () => cy.get('#qa-registration-form-register-button'),
        myAccountPage: () => cy.get('#account-navigation > .block-title')
    };

    clickMyAccount() {
        this.elements.myAccount().click();
    }

    clickInitials() {
        this.elements.selectInitials().click();
    }

   selectAcademicTitle() {
        this.elements.academicTitle().select("Prof.")
    }

    typefirstName() {
        this.elements.firstName().type("Professor", { force: true });
    }
    
    typelasttName() {
        this.elements.lastName().type("Segun", { force: true });
    }

    typeEmail() {
        this.elements.emailAddress().type(email, { force: true });
    }

    typePassword() {
        this.elements.password().type("Bamikole1@", { force: true });
    }

    typeConfirmPassword() {
        this.elements.confirmPassword().type("Bamikole1@", { force: true });
    }

    clickRegisterBtn() {
        this.elements.registerBtn().click();
    }

    verifyMyAccountPage() {
        this.elements.myAccountPage().should("have.text", "My Account");;
    }

}

module.exports = new createAcctPage ();