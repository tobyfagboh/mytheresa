const { defineConfig } = require("cypress");

module.exports = defineConfig({
  extends: "./cypress.config.js",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://local.mytheresa.com/en-de/men.html",
  },
});
