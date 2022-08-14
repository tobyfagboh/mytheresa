# cypress-cucumber-e2e-testing

> Cypress 10+ with Cucumber boilerplate project.

### 💻 Topics

Integrated with:

- [x] https://github.com/badeball/cypress-cucumber-preprocessor
- [x] https://github.com/bahmutov/cypress-esbuild-preprocessor
- [x] https://www.npmjs.com/package/multiple-cucumber-html-reporter

(+ bundlers: https://github.com/badeball/cypress-cucumber-preprocessor/tree/master/examples)

- ## 💻 Steps to Execute

Before you use this project you only need to have Node Js installed in your computer.

https://nodejs.org/es/download/

Also, download and install the JSON fomatter depending on your OS

https://github.com/cucumber/json-formatter

## 🚀 Install the project

Install project dependencies with: npm i

## 🚀 Run the test: 
Open the terminal and run: npm run cypress:execution

## 🚀 Run the test based on a particular environment 

Open the terminal and run: npm run cypress:execution

To run on a different environment. Open the terminal and run: npm cypress open --config configfile_name e.g:
            npx cypress run --config-file cypress.config.js
            npx cypress run --config-file cypress-local.config.js
            npx cypress run --config-file cypress-staging.config.js
            npx cypress run --config-file cypress-test.config.js
