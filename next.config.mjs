/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'area41.net',
      },
    ],
  },
};

export default nextConfig;
