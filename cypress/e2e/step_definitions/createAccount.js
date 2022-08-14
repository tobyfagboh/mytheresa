import {Given,When,And,Then,} from "@badeball/cypress-cucumber-preprocessor";
const createAccountPage = require("../../pages/createAccountPage");

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

Given(/^A user is on create account page$/, () => {
    cy.visit('/',{
        headers:{
            "User-Agent":"axios/0.18.0"
        }
    });
});

When(/^a user clicks on my account button$/, () => {
	createAccountPage.clickMyAccount()
});

When(/^select initials$/, () => {
	createAccountPage.clickInitials()
});

And(/^enters academic title$/, (table) => {
	createAccountPage.selectAcademicTitle()
});

When(/^enters first name$/, () => {
	createAccountPage.typefirstName()
});

When(/^enters last name$/, () => {
    createAccountPage.typelasttName()
});

When(/^enters email address$/, () => {
	createAccountPage.typeEmail()
});

When(/^enters password$/, () => {
	createAccountPage.typePassword()
});

When(/^enters confirm password$/, () => {
	createAccountPage.typeConfirmPassword()
});

When(/^clicks on the register button$/, () => {
	createAccountPage.clickRegisterBtn()
});

Then(/^the user should be redirected to the dashboard$/, () => {
	//createAccountPage.verifyMyAccountPage()
});
