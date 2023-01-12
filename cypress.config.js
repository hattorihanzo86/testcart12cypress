const { defineConfig } = require('cypress')

module.exports = defineConfig({
  API_URL: 'https://dummyjson.com/products',
  e2e: {
    setupNodeEvents(on, config) {},
  },
})
