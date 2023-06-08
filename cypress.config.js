const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://wlsf82-hacker-stories.web.app',
    env: {
      hideCredentials: true,
      requestMode: true
    }
  },
  video: false
})
