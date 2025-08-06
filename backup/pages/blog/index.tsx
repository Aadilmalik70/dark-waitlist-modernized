import { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Search, 
  BookOpen, 
  Rss,
  ArrowRight,
  Sparkles,
  Clock,
  Eye,
  TrendingUp
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Badge } from '../../components/ui/badge';

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
  readTime?: number;
  views?: number;
}

interface BlogPageProps {
  initialPosts?: BlogPost[];
}

export default function BlogPage({ initialPosts }: BlogPageProps) {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts || []);
  const [loading, setLoading] = useState(!initialPosts);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
      fetchPosts();
  }, [initialPosts]);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/blog/posts?status=published');
      console.log(response)
      const data = await response.json();
      setPosts(data.posts || samplePosts);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      setPosts(samplePosts);
    } finally {
      setLoading(false);
    }
  };

  // Sample posts with enhanced data
  const samplePosts: BlogPost[] = [
    {
      id: '1',
      title: 'How to Create Content That Dominates Search Results',
      slug: 'create-content-that-dominates-search',
      excerpt: 'Learn the proven strategies for creating content that ranks at the top of search results and drives organic traffic to your website. We\'ll cover keyword research, content structure, and optimization techniques.',
      featuredImage: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      author: {
        name: 'Sarah Johnson',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      },
      publishedAt: '2025-05-15T10:30:00Z',
      categories: ['Content Strategy', 'SEO'],
      readTime: 8,
      views: 1247
    },
    {
      id: '2',
      title: 'Understanding Search Intent: The Key to Content Success',
      slug: 'understanding-search-intent',
      excerpt: 'Discover how understanding search intent can transform your content strategy and help you create more relevant, valuable content that resonates with your target audience.',
      featuredImage: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      author: {
        name: 'John Doe',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      },
      publishedAt: '2025-05-10T14:45:00Z',
      categories: ['SEO', 'User Experience'],
      readTime: 6,
      views: 892
    },
    {
      id: '3',
      title: '5 Ways AI is Transforming Content Creation in 2025',
      slug: 'ai-transforming-content-creation',
      excerpt: 'Explore how artificial intelligence is revolutionizing the way we create, optimize, and distribute content in the digital landscape. From automated writing to smart optimization.',
      featuredImage: 'https://images.unsplash.com/photo-1677442135968-6d89469c5f97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
      author: {
        name: 'Emily Chen',
        avatar: 'https://randomuser.me/api/portraits/women/23.jpg',
      },
      publishedAt: '2025-05-05T09:15:00Z',
      categories: ['AI', 'Content Strategy'],
      readTime: 12,
      views: 2156
    }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = !searchTerm || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const BlogPostCard = ({ post }: { post: BlogPost }) => (
    <Link href={`/blog/${post.slug}`}>
      <div className="group relative overflow-hidden bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl hover:border-purple-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-900/20 cursor-pointer">
        {/* Featured Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-blue-600/20 z-10"></div>
          <img 
            src={post.featuredImage} 
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4 z-20 flex gap-2">
            {post.categories?.slice(0, 2).map((category) => (
              <Badge 
                key={category} 
                className="bg-black/40 backdrop-blur-sm text-white border-white/20 hover:bg-black/60 transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
          <div className="absolute bottom-4 right-4 z-20 flex items-center gap-3 text-white/80 text-sm">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}m read</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span>{post.views?.toLocaleString()}</span>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <img 
              src={post.author.avatar} 
              alt={post.author.name}
              className="w-8 h-8 rounded-full ring-2 ring-purple-500/20"
            />
            <span className="font-medium text-gray-300">{post.author.name}</span>
            <span>•</span>
            <span>{formatDate(post.publishedAt)}</span>
          </div>
          
          <h3 className="text-xl font-bold text-white leading-tight group-hover:text-purple-300 transition-colors line-clamp-2">
            {post.title}
          </h3>
          
          <p className="text-gray-400 leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center text-purple-400 font-medium group-hover:text-purple-300 transition-colors">
              <span className="text-sm">Read More</span>
              <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );

  const EmptyState = () => (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center py-20 max-w-2xl mx-auto"
    >
      <div className="relative mb-8">
        <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-purple-500/20">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
            <BookOpen className="w-10 h-10 text-white" />
          </div>
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
      </div>
      
      <h3 className="text-3xl font-bold text-white mb-4">
        Coming Soon: Amazing Content!
      </h3>
      <p className="text-xl text-gray-300 mb-8 leading-relaxed">
        We're crafting insightful articles to help you dominate search results. 
        Be the first to know when we publish new content.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-xl shadow-purple-900/25 hover:shadow-purple-900/40 transition-all duration-300 px-8 py-3 text-lg">
          <Rss className="mr-2 h-5 w-5" />
          Subscribe for Updates
        </Button>
        <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800/50 px-8 py-3">
          <TrendingUp className="mr-2 h-4 w-4" />
          Explore Sample Posts
        </Button>
      </div>
      
      {/* Sample posts showcase */}
      <div className="mt-16 space-y-8">
        <div className="flex items-center justify-center mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent flex-1"></div>
          <span className="px-6 text-lg font-medium text-purple-400 bg-gray-950">
            Sample Posts Preview
          </span>
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent flex-1"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {samplePosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <BlogPostCard post={post} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <>
      <Head>
        <title>Blog | SERP Strategist</title>
        <meta name="description" content="Latest news, strategies, and insights to help you create content that dominates search results" />
      </Head>

      <div className="min-h-screen bg-gray-950 text-gray-100 relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          
          {/* Animated floating elements */}
          <div className="absolute top-20 left-20 w-2 h-2 bg-purple-400/30 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-blue-400/40 rounded-full animate-ping"></div>
          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-purple-300/20 rounded-full animate-pulse delay-1000"></div>
        </div>
        
        {/* Header */}
        <header className="relative z-10 border-b border-gray-800/50 bg-gray-950/50 backdrop-blur-sm">
          <div className="container px-4 py-4">
            <nav className="flex items-center justify-between">
              <Link href="/" className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Our Blog
              </Link>
              <div className="flex items-center gap-4">
                <Button variant="outline" className="border-gray-700 hover:border-purple-500 transition-colors">
                  <Rss className="w-4 h-4 mr-2" />
                  Subscribe
                </Button>
              </div>
            </nav>
          </div>
        </header>

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

          {/* Search Section */}
          {(posts.length > 0 || samplePosts.length > 0) && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-4xl mx-auto mb-12"
            >
              <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                  <Input
                    type="search"
                    placeholder="Search articles..."
                    className="pl-12 bg-gray-800/50 border-gray-700/50 focus:border-purple-500/50 text-white h-12 rounded-xl text-lg placeholder:text-gray-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                {searchTerm && (
                  <div className="mt-4 pt-4 border-t border-gray-800/50">
                    <p className="text-gray-400">
                      {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found for "{searchTerm}"
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
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
          ) : filteredPosts.length > 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-7xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
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
