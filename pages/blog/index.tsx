import { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import BlogHeader from '../../components/blog/BlogHeader';
import BlogPostCard from '../../components/blog/BlogPostCard';
import { Skeleton } from '../../components/ui/skeleton';
import { motion } from 'framer-motion';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage?: string;
  author: {
    name: string;
    avatar?: string;
  };
  publishedAt: string;
  categories?: string[];
}

interface BlogPageProps {
  initialPosts?: BlogPost[];
}

export default function BlogPage({ initialPosts }: BlogPageProps) {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts || []);
  const [loading, setLoading] = useState(!initialPosts);

  useEffect(() => {
    if (!initialPosts) {
      fetchPosts();
    }
  }, [initialPosts]);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/blog/posts?status=published');
      const data = await response.json();
      setPosts(data.posts || []);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    } finally {
      setLoading(false);
    }
  };

  // Sample posts for demonstration
  const samplePosts: BlogPost[] = [
    {
      id: '1',
      title: 'How to Create Content That Dominates Search Results',
      slug: 'create-content-that-dominates-search',
      excerpt: 'Learn the proven strategies for creating content that ranks at the top of search results and drives organic traffic to your website.',
      featuredImage: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      author: {
        name: 'Sarah Johnson',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      },
      publishedAt: '2025-05-15T10:30:00Z',
      categories: ['Content Strategy', 'SEO']
    },
    {
      id: '2',
      title: 'Understanding Search Intent: The Key to Content Success',
      slug: 'understanding-search-intent',
      excerpt: 'Discover how understanding search intent can transform your content strategy and help you create more relevant, valuable content for your audience.',
      featuredImage: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      author: {
        name: 'John Doe',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      },
      publishedAt: '2025-05-10T14:45:00Z',
      categories: ['SEO', 'User Experience']
    },
    {
      id: '3',
      title: '5 Ways AI is Transforming Content Creation in 2025',
      slug: 'ai-transforming-content-creation',
      excerpt: 'Explore how artificial intelligence is revolutionizing the way we create, optimize, and distribute content in the digital landscape.',
      featuredImage: 'https://images.unsplash.com/photo-1677442135968-6d89469c5f97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
      author: {
        name: 'Emily Chen',
        avatar: 'https://randomuser.me/api/portraits/women/23.jpg',
      },
      publishedAt: '2025-05-05T09:15:00Z',
      categories: ['AI', 'Content Strategy']
    }
  ];

  return (
    <>
      <Head>
        <title>Blog | SERP Strategist</title>
        <meta name="description" content="Latest news, strategies, and insights to help you create content that dominates search results" />
      </Head>

      <div className="min-h-screen bg-gray-950 text-gray-100">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-3xl -z-10 opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-3xl -z-10 opacity-60"></div>
        
        <BlogHeader />

        <div className="container px-4 py-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto mb-12 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Insights & Updates
            </h1>
            <p className="text-xl text-gray-300">
              Latest news, strategies, and insights to help you create content that dominates search results
            </p>
          </motion.div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="space-y-3">
                  <Skeleton className="h-[200px] w-full rounded-xl bg-gray-800/50" />
                  <Skeleton className="h-6 w-3/4 bg-gray-800/50" />
                  <Skeleton className="h-4 w-1/2 bg-gray-800/50" />
                  <Skeleton className="h-20 w-full bg-gray-800/50" />
                </div>
              ))}
            </div>
          ) : posts.length > 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {posts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <BlogPostCard post={post} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center py-16 max-w-md mx-auto"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
                <h3 className="text-xl font-medium text-gray-200 mb-3">No blog posts found</h3>
                <p className="text-gray-400 mb-6">Check back soon for new content</p>
                
                {/* Display sample posts for demonstration */}
                <div className="text-left space-y-6">
                  <h4 className="text-lg font-medium text-purple-400">Sample Posts (Demo Only)</h4>
                  <div className="space-y-4">
                    {samplePosts.map((post, index) => (
                      <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                      >
                        <BlogPostCard post={post} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    // In a real implementation, this would fetch from the API
    // For now, we'll let client-side fetching handle it
    return {
      props: {
        initialPosts: []
      }
    };
  } catch (error) {
    console.error('Error in getServerSideProps:', error);
    return {
      props: {
        initialPosts: []
      }
    };
  }
};
