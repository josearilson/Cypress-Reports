const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: false,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
  e2e: {
    specPattern: 'cypress/e2e/**/*.js', // Ajuste conforme a sua estrutura de pastas
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://serverest.dev',
  },
})
