const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.mytheresa.com/en-de/men.html',
    specPattern:"**/*.feature",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});