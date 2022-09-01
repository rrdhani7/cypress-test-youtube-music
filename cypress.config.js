const { defineConfig } = require("cypress");
const tagify = require('cypress-tags');


module.exports = defineConfig({
  "numTestsKeptInMemory": 0,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', tagify(config));
    },
  },
});
