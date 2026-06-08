import { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03',
  useCdn: true,
});

const siteUrl = process.env.SITE_URL || 'https://serpstrategist.com';

function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }

  try {
    const posts = await client.fetch(`
      *[_type == "post" && publishedAt < now()] | order(publishedAt desc) [0...50] {
        title,
        slug,
        excerpt,
        publishedAt,
        "author": author->name
      }
    `);

    const items = posts
      .map((post: any) => {
        const title = escapeXml(post.title || '');
        const link = `${siteUrl}/blog/${post.slug?.current || ''}`;
        const description = escapeXml(post.excerpt || '');
        const pubDate = post.publishedAt
          ? new Date(post.publishedAt).toUTCString()
          : new Date().toUTCString();
        const author = post.author ? escapeXml(post.author) : 'SERP Strategist';

        return `
    <item>
      <title>${title}</title>
      <link>${link}</link>
      <description>${description}</description>
      <pubDate>${pubDate}</pubDate>
      <author>${author}</author>
      <guid isPermaLink="true">${link}</guid>
    </item>`;
      })
      .join('');

    const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>SERP Strategist Blog</title>
    <link>${siteUrl}/blog</link>
    <description>Expert SEO strategies, content marketing insights, and AI-powered content blueprint guides.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/api/rss" rel="self" type="application/rss+xml" />${items}
  </channel>
</rss>`;

    res.setHeader('Content-Type', 'application/rss+xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=600');
    return res.status(200).send(feed);
  } catch (error) {
    console.error('RSS feed error:', error);
    return res.status(500).json({ error: 'Failed to generate RSS feed' });
  }
}
