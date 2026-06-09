/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/proxy/:path*',
        destination: 'https://dm-fox.rjj.cc/codex/v1/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
