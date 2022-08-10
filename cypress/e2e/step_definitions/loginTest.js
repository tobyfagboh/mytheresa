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
    });
	cy.clearCookies()
});

When(/^A user clicks myaccount button$/, () => {
	loginPage.clickMyaccount();
});

When("A then user enters incorrect credentials", (table) => {
	table.hashes().forEach((row) => {
        cy.log(row.username);
        cy.log(row.password);
        loginPage.typeUsername(row.username);
        loginPage.typePassword(row.password);
      });
});

When(/^The user clicks on the login button$/, () => {
	loginPage.clickLogin();
	cy.wait(3000)
});

Then(/^Then an error message "([^"]*)" is displayed$/, (errorMessage) => {
	loginPage.elements.errorMessage().should("have.text", errorMessage);
});

When(/^A user enters incorrect credentials$/, () => {
	return true;
});

When(/^A user clicks on the login button$/, () => {
	return true;
});

Then(/^The an error message "([^"]*)" is displayed$/, (args1) => {
	console.log(args1);
	return true;
});

When(/^A user enters the username "([^"]*)"$/, (args1) => {
	console.log(args1);
	return true;
});

When(/^A user enters the password "([^"]*)"$/, (args1) => {
	console.log(args1);
	return true;
});

When(/^A user clicks on the login button$/, () => {
	return true;
});

Then(/^the url will contains the inventory subdirectory$/, () => {
	return true;
});
