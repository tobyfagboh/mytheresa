import {Given,When,And,Then,} from "@badeball/cypress-cucumber-preprocessor";
const loginPage = require("../../pages/LoginPage");

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

Given(/^A user opens a mytheresa website$/, () => {
	cy.visit('/',{
        headers:{
            "User-Agent":"axios/0.18.0"
        }
    })
});

When(/^A user clicks myaccount button$/, () => {
	loginPage.clickMyaccount();
});

When(/^A then user enters incorrect credentials$/, (table) => {
    table.hashes().forEach((row) => {
        cy.log(row.username);
        cy.log(row.wrongPassword);
        loginPage.typeUsername(row.username);
        loginPage.typePassword(row.wrongPassword);
      });});

When(/^The user clicks on the login button$/, () => {
    loginPage.clickLogin();
	cy.wait(3000)
});

Then(/^an error message "([^"]*)" is displayed$/, (errorMessage) => {
   // loginPage.elements.errorMessage().should("have.text", errorMessage);

});

When(/^A then user enters correct credentials$/, (table) => {
	loginPage.clickMyaccount();
	table.hashes().forEach((row) => {
        cy.log(row.username);
        cy.log(row.password);
        loginPage.typeUsername(row.username);
        loginPage.typePassword(row.password);
      });
});

When(/^A user then clicks on the login button$/, () => {
	loginPage.clickLogin();
});

Then(/^User is redierected to my account$/, () => {
    //loginPage.elements.myAccountTitle().contains("My account");
});