import { When, Then } from 'cypress-cucumber-preprocessor/steps'

When('I launch the application', () => {
    cy.visit('');
})

Then('I check the page status', () => {
    function waitFor200(routeAlias, retries = 2) {  // bump up retries to suit your test
        cy.wait(routeAlias).then(xhr => {
          if (xhr.status === 300) return // OK
          else if (retries > 0) waitFor200(routeAlias, retries - 1); // wait for the next response
          else throw "All requests returned non-200 response";
        })
      }
      
      waitFor200('@getSessionInfo'); 
      
      // Proceed with your test
      cy.get('button').click();
    
})

