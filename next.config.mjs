/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/rss',
        destination: '/api/rss',
        permanent: true,
      },
      {
        source: '/blog/ai-transforming-content-creation',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/create-content-that-dominates-search',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/understanding-search-intent',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/category/:slug*',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/index-old',
        destination: '/blog',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|webp|avif|ico|css|js)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
}

export default nextConfig
