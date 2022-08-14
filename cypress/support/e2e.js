// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')
beforeEach(() => {
    Cypress.on('uncaught:exception', (error, runnable) => {
        return false
    })
    /**
     * The visit flow has an headers config that permits scripts
     * to have access to the staging url, without this headers
     * the staging page will not be loaded unless the user first signs
     * with the quidax email
     **/

    // cy.visit('/', {failOnStatusCode: false,
    // })
    
    cy.request({
        method: "GET",
        followRedirect: false, log: true,
        url: 'https://www.mytheresa.com/en-de/men.html',
        headers: {
            "Accept": "application/json",
            "User-Agent":"axios/0.18.0"
        },
        response: []
    })
    .then(response => {
        cy.log(response.body)
        assert.equal(response.status, 200);
        expect(response.body).to.not.be.null;
    })
})