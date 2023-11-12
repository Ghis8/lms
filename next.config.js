/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate')

module.exports = nextTranslate({
    webpack: (config, { isServer, webpack }) => {
      return config;
    }
})

const nextConfig = {
    images:{
        domains:["utfs.io"]
    }
}

module.exports = nextConfig
