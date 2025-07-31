import { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import client from '../../lib/sanity';
import { postsQuery, featuredPostsQuery } from '../../lib/queries';
import { BlogPostCard } from '../../components/blog/BlogPostCard';
import { BlogHeader } from '../../components/blog/BlogHeader';
import { BlogSearch } from '../../components/blog/BlogSearch';
import { EmptyState } from '../../components/blog/EmptyState';

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  mainImage?: {
    asset: any;
    alt?: string;
  };
  author: {
    name: string;
    image?: {
      asset: any;
      alt?: string;
    };
  };
  publishedAt: string;
  categories?: Array<{
    title: string;
    color: string;
  }>;
  readingTime?: number;
  featured?: boolean;
}

interface BlogPageProps {
  initialPosts: BlogPost[];
  featuredPosts: BlogPost[];
}

export default function BlogPage({ initialPosts, featuredPosts }: BlogPageProps) {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts || []);
  const [loading, setLoading] = useState(!initialPosts);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = posts.filter(post => {
    const matchesSearch = !searchTerm || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (post.excerpt && post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesSearch;
  });

  const hasContent = posts.length > 0;

  return (
    <>
      <Head>
        <title>Blog | SERP Strategist</title>
        <meta name="description" content="Latest strategies and insights to help you create content that dominates search results" />
      </Head>

      <div className="min-h-screen bg-gray-950 text-gray-100 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <BlogHeader />

        <div className="container px-4 py-16 relative z-10">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto mb-16 text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full text-purple-300 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              <span>Fresh insights & strategies</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-blue-200">
                Insights &
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400">
                Updates
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Discover the latest strategies and insights to help you create content that 
              <span className="text-purple-300 font-medium"> dominates search results</span> and 
              drives meaningful engagement.
            </p>
          </motion.div>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {featuredPosts.slice(0, 3).map((post, index) => (
                  <motion.div
                    key={post._id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    <BlogPostCard post={post} />
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Search Section */}
          {hasContent && (
            <BlogSearch 
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              resultsCount={filteredPosts.length}
            />
          )}

          {/* Content Section */}
          {loading ? (
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl overflow-hidden"
                  >
                    <div className="aspect-[16/10] bg-gray-800/50 animate-pulse"></div>
                    <div className="p-6 space-y-4">
                      <div className="h-6 bg-gray-800/50 rounded animate-pulse"></div>
                      <div className="h-4 bg-gray-800/50 rounded w-2/3 animate-pulse"></div>
                      <div className="space-y-2">
                        <div className="h-4 bg-gray-800/50 rounded animate-pulse"></div>
                        <div className="h-4 bg-gray-800/50 rounded w-1/2 animate-pulse"></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ) : hasContent && filteredPosts.length > 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-7xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                {featuredPosts.length > 0 ? 'All Articles' : 'Latest Articles'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.div
                    key={post._id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    <BlogPostCard post={post} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <EmptyState />
          )}
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const [posts, featuredPosts] = await Promise.all([
      client.fetch(postsQuery, { start: 0, end: 12 }),
      client.fetch(featuredPostsQuery),
    ]);

    return {
      props: {
        initialPosts: posts || [],
        featuredPosts: featuredPosts || [],
      }
    };
  } catch (error) {
    console.error('Error fetching blog data:', error);
    return {
      props: {
        initialPosts: [],
        featuredPosts: [],
      }
    };
  }
};
