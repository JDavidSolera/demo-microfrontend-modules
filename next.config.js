const { NextFederationPlugin } = require('@module-federation/nextjs-mf')
const exposes = require('./exposes.json')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    const { isServer } = options
    config.experiments = { topLevelAwait: true };
    config.plugins.push(
      new NextFederationPlugin({
        name: 'modules',
        filename: 'static/chunks/modules.js',
        remotes: {
          core: 'core@http://localhost:8000/core.js',
          'design-system': `design_system@http://localhost:8001/_next/static/${isServer ? 'ssr' : 'chunks'}/design-system.js`,
        },
        exposes
      }),
    )

    return config
  }
}

module.exports = nextConfig
