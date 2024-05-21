const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true, // Enables video recording for all tests by default

  e2e: {
    setupNodeEvents(on, config) {
      // Implement any custom node event listeners here (optional)
    },
    baseUrl: 'https://front.serverest.dev/', // Base URL for your tests
    video: true, // Sets video recording specifically for e2e tests (redundant with top-level video: true)
  },
});
