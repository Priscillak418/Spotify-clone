/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  // ...
  env: {
    // Set the log level to 'debug' or 'verbose'
    LOG_LEVEL: 'debug',
  },
};


module.exports = nextConfig
