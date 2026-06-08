const { createClient } = require('@sanity/client')

// Environment variables for Sanity
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const useCdn = false

if (!projectId) {
  console.warn('NEXT_PUBLIC_SANITY_PROJECT_ID not found. Sitemap will skip Sanity content.')
}

const client = projectId ? createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
}) : null

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://serpstrategist.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/studio', '/studio/*', '/test-*', '/admin', '/admin/*'],
  
  additionalPaths: async (config) => {
    if (!client) {
      console.warn('Sanity client not available. Skipping dynamic sitemap generation.')
      return [
        {
          loc: '/blog',
          lastmod: new Date().toISOString(),
          priority: 0.9,
          changefreq: 'daily'
        }
      ]
    }

    try {
      // Fetch all published blog posts
      const posts = await client.fetch(`
        *[_type == "post" && publishedAt < now()] {
          slug,
          _updatedAt,
          publishedAt
        }
      `);

      const blogPaths = posts.map((post) => ({
        loc: `/blog/${post.slug.current}`,
        lastmod: post._updatedAt,
        priority: 0.8,
        changefreq: 'weekly'
      }));

      console.log(`✅ Generated sitemap with ${posts.length} posts`)

      return [
        ...blogPaths,
        {
          loc: '/blog',
          lastmod: new Date().toISOString(),
          priority: 0.9,
          changefreq: 'daily'
        }
      ];
    } catch (error) {
      console.warn('Error fetching Sanity data for sitemap:', error.message);
      return [
        {
          loc: '/blog',
          lastmod: new Date().toISOString(),
          priority: 0.9,
          changefreq: 'daily'
        }
      ];
    }
  },

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/studio', '/test-*', '/api', '/admin']
      }
    ],
    additionalSitemaps: [
      'https://serpstrategist.com/sitemap.xml'
    ]
  },

  transform: async (config, path) => {
    // Custom transform for different page types
    if (path === '/') {
      return {
        loc: path,
        lastmod: new Date().toISOString(),
        priority: 1.0,
        changefreq: 'daily'
      };
    }

    if (path.startsWith('/blog/')) {
      return {
        loc: path,
        lastmod: config.lastmod || new Date().toISOString(),
        priority: 0.8,
        changefreq: 'weekly'
      };
    }

    return {
      loc: path,
      lastmod: config.lastmod || new Date().toISOString(),
      priority: 0.7,
      changefreq: 'monthly'
    };
  }
};
