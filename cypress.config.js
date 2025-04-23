const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    numTestsKeptInMemory : 0,
    experimentalMemoryManagement: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
