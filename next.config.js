/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack: (config) => {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },
  env: {
    RAWG_API: process.env.RAWG_API,
    RAWG_MEDIA_API: process.env.RAWG_MEDIA_API,
    MONGODB_URI: process.env.MONGO_URI,
    API_KEY: process.env.API_KEY,

    OAUTH_CLIENT_ID: process.env.OAUTH_CLIENT_ID,
    OAUTH_CLIENT_SECRET: process.env.OAUTH_CLIENT_SECRET,
    META_APP_ID: process.env.META_APP_ID,
    META_APP_SECRET: process.env.META_APP_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.NEXTAUTH_SECRET,
  },
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['mongoose'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.rawg.io',
        port: '',
        pathname: `/api/games?$**`,
      },
      {
        protocol: 'https',
        hostname: 'media.rawg.io',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '**',
      },
    ],
  },
  compiler: { styledComponents: true },
};

module.exports = nextConfig;
