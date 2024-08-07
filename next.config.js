const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.resolve.alias['@'] = path.resolve(__dirname, './src')
        return config
      },
}

module.exports = nextConfig
