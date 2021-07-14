const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  publicRuntimeConfig: {}
})

module.exports = {
  basePath: '',
}

module.exports = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }

    return config
  }
}
