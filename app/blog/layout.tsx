import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Blog & Content Strategy Insights',
  description: 'Explore expert SEO strategies, content marketing tips, and SERP optimization guides. Actionable insights and case studies to boost your search rankings and organic traffic.',
  openGraph: {
    title: 'SEO Blog & Content Strategy Insights | SERP Strategist',
    description: 'Explore expert SEO strategies, content marketing tips, and SERP optimization guides. Actionable insights and case studies to boost your search rankings.',
    type: 'website',
  },
  alternates: {
    types: {
      'application/rss+xml': '/api/rss',
    },
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
