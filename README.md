# mytheresa

# Automated Scripts for Mytheresa 

## Tools and Framework used
* Framework: [Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements)
* Supporting Language: Javascript
* Supporting Libraries:
    * [Node.js (12 or Higher)](https://nodejs.org/en/)
    * [Cucumber](https://www.npmjs.com/package/cypress-cucumber-preprocessor)

## Local Setup
* After cloning this repo to the local machine, `npm install` to install from the `package.json` file.

## Running tests locally
* Use ```npx cypress open``` or `node_modules/.bin/cypress open` to open the test runner and execute a visual regression
  locally.
* Use `npx cypress run` or `node_modules/.bin/cypress run` to run the test in headless mode
* Use `npx cypress run -b <browser_type> --headless` to run in headless mode with a specific browser

## Supported Browsers
The following are the supported browsers as of this version; 7.6.0
* Chrome
* Edge
* Electron (default)
* Firefox