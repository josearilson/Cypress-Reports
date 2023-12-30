const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: false,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
  integrationFolder: 'cypress/integration', // ajuste conforme a sua estrutura de pastas
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://serverest.dev',
  },
})
