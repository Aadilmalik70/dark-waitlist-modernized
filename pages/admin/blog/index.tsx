import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Button } from '../../../components/ui/button';
import { 
  PlusCircle, 
  Edit, 
  Trash2, 
  Search, 
  Eye, 
  ArrowUpDown, 
  RefreshCw,
  MoreHorizontal,
  FileText,
  Clock,
  BarChart3,
  TrendingUp
} from 'lucide-react';
import { 
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import { Input } from '../../../components/ui/input';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../../../components/ui/dropdown-menu';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../components/ui/select';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../../../components/ui/tabs';
import { motion } from 'framer-motion';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  featuredImage?: string;
  status: 'draft' | 'published';
  publishedAt: string | null;
  updatedAt: string;
  categories?: string[];
  viewCount?: number;
  readTime?: number;
  author: {
    name: string;
    avatar?: string;
  };
}

export default function BlogAdminPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'published' | 'draft'>('all');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'title' | 'views'>('newest');
  const [refreshing, setRefreshing] = useState(false);

  // Sample data
  const samplePosts: BlogPost[] = [
    {
      id: '1',
      title: 'How to Create Content That Dominates Search Results',
      slug: 'create-content-that-dominates-search',
      excerpt: 'Learn the proven strategies for creating content that ranks at the top of search results.',
      featuredImage: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
      status: 'published',
      publishedAt: '2025-05-15T10:30:00Z',
      updatedAt: '2025-05-15T10:30:00Z',
      categories: ['Content Strategy', 'SEO'],
      viewCount: 1247,
      readTime: 8,
      author: {
        name: 'Sarah Johnson',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      }
    },
    {
      id: '2',
      title: 'Understanding Search Intent: The Key to Content Success',
      slug: 'understanding-search-intent',
      excerpt: 'Discover how understanding search intent can transform your content strategy.',
      featuredImage: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1374&q=80',
      status: 'draft',
      publishedAt: null,
      updatedAt: '2025-05-10T14:45:00Z',
      categories: ['SEO', 'User Experience'],
      viewCount: 0,
      readTime: 6,
      author: {
        name: 'John Doe',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      }
    },
    {
      id: '3',
      title: '5 Ways AI is Transforming Content Creation in 2025',
      slug: 'ai-transforming-content-creation',
      excerpt: 'Explore how artificial intelligence is revolutionizing content creation.',
      featuredImage: 'https://images.unsplash.com/photo-1677442135968-6d89469c5f97?auto=format&fit=crop&w=1932&q=80',
      status: 'published',
      publishedAt: '2025-05-05T09:15:00Z',
      updatedAt: '2025-05-06T11:20:00Z',
      categories: ['AI', 'Content Strategy'],
      viewCount: 2156,
      readTime: 12,
      author: {
        name: 'Emily Chen',
        avatar: 'https://randomuser.me/api/portraits/women/23.jpg',
      }
    }
  ];

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    filterAndSortPosts();
  }, [posts, searchTerm, statusFilter, sortBy]);

  const filterAndSortPosts = () => {
    let result = [...posts];
    
    if (statusFilter !== 'all') {
      result = result.filter(post => post.status === statusFilter);
    }
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(post => 
        post.title.toLowerCase().includes(term) || 
        (post.excerpt && post.excerpt.toLowerCase().includes(term))
      );
    }
    
    result.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
        case 'oldest':
          return new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime();
        case 'title':
          return a.title.localeCompare(b.title);
        case 'views':
          return (b.viewCount || 0) - (a.viewCount || 0);
        default:
          return 0;
      }
    });
    
    setFilteredPosts(result);
  };

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/blog/posts?status=all');
      
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      
      const data = await response.json();
      setPosts(data.posts || samplePosts);
    } catch (error) {
      console.error('Error fetching posts:', error);
      setError('Failed to load posts. Please try again.');
      setPosts(samplePosts);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchPosts();
    setTimeout(() => setRefreshing(false), 500);
  };

  const handleDeletePost = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return;
    
    try {
      const response = await fetch(`/api/blog/posts/${id}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Failed to delete post');
      fetchPosts();
    } catch (error) {
      console.error('Error deleting post:', error);
      setError('Failed to delete post. Please try again.');
    }
  };

  const handlePublishPost = async (id: string) => {
    try {
      const response = await fetch(`/api/blog/posts/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'published' }),
      });
      if (!response.ok) throw new Error('Failed to publish post');
      fetchPosts();
    } catch (error) {
      console.error('Error publishing post:', error);
      setError('Failed to publish post. Please try again.');
    }
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Not published';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const stats = {
    totalPosts: posts.length,
    publishedPosts: posts.filter(p => p.status === 'published').length,
    draftPosts: posts.filter(p => p.status === 'draft').length,
    totalViews: posts.reduce((sum, p) => sum + (p.viewCount || 0), 0)
  };

  const StatsCard = ({ title, value, color, icon: Icon, delay }: any) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className={`bg-gradient-to-br from-${color}-500/10 to-${color}-600/5 backdrop-blur-sm border-${color}-500/20 hover:border-${color}-500/40 transition-all duration-300`}>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-${color}-300 text-sm font-medium`}>{title}</p>
              <p className="text-3xl font-bold text-white">{value}</p>
            </div>
            <div className={`p-3 bg-${color}-500/20 rounded-full`}>
              <Icon className={`w-6 h-6 text-${color}-400`} />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  const PostCard = ({ post, index }: { post: BlogPost; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.05 * index }}
      className="group"
    >
      <Card className="h-full overflow-hidden bg-gray-900/40 backdrop-blur-sm border-gray-800/50 hover:border-purple-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-900/10">
        {post.featuredImage && (
          <div className="aspect-[16/9] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-blue-600/20 z-10"></div>
            <img 
              src={post.featuredImage} 
              alt={post.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 z-20">
              <Badge 
                variant={post.status === 'published' ? 'default' : 'outline'} 
                className={post.status === 'published' 
                  ? 'bg-green-500/20 text-green-300 border-green-500/30 backdrop-blur-sm'
                  : 'bg-gray-900/60 text-gray-300 border-gray-500/30 backdrop-blur-sm'
                }
              >
                {post.status === 'published' ? 'Published' : 'Draft'}
              </Badge>
            </div>
            {post.viewCount !== undefined && (
              <div className="absolute top-4 right-4 z-20 flex items-center gap-1 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-white/80">
                <Eye className="h-3 w-3" />
                <span>{post.viewCount.toLocaleString()}</span>
              </div>
            )}
          </div>
        )}
        
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="line-clamp-2 text-white group-hover:text-purple-300 transition-colors leading-tight">
              {post.title}
            </CardTitle>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-gray-400 hover:text-white">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-gray-900 border-gray-800">
                <DropdownMenuItem asChild>
                  <Link href={`/admin/blog/edit/${post.id}`} className="flex items-center">
                    <Edit className="mr-2 h-4 w-4" />
                    Edit
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={`/blog/${post.slug}`} target="_blank" className="flex items-center">
                    <Eye className="mr-2 h-4 w-4" />
                    View
                  </Link>
                </DropdownMenuItem>
                {post.status === 'draft' && (
                  <DropdownMenuItem onClick={() => handlePublishPost(post.id)}>
                    <TrendingUp className="mr-2 h-4 w-4" />
                    Publish
                  </DropdownMenuItem>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem 
                  onClick={() => handleDeletePost(post.id)}
                  className="text-red-400 hover:text-red-300"
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <img 
                src={post.author.avatar} 
                alt={post.author.name}
                className="w-6 h-6 rounded-full ring-1 ring-gray-700"
              />
              <span>{post.author.name}</span>
            </div>
            <span>•</span>
            <span>{formatDate(post.updatedAt)}</span>
            {post.readTime && (
              <>
                <span>•</span>
                <span>{post.readTime}m read</span>
              </>
            )}
          </div>
        </CardHeader>
        
        {post.excerpt && (
          <CardContent className="pt-0">
            <p className="text-gray-400 line-clamp-3 leading-relaxed">
              {post.excerpt}
            </p>
          </CardContent>
        )}
        
        <CardFooter className="mt-auto pt-4 flex justify-between items-center">
          <div className="flex gap-2">
            {post.categories?.slice(0, 2).map((category) => (
              <Badge 
                key={category} 
                variant="outline" 
                className="text-xs border-gray-700 text-gray-400 hover:border-purple-500/50 hover:text-purple-300"
              >
                {category}
              </Badge>
            ))}
          </div>
          
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="sm" 
              asChild
              className="text-gray-400 hover:text-purple-400 h-8 w-8 p-0"
            >
              <Link href={`/admin/blog/edit/${post.id}`}>
                <Edit className="h-4 w-4" />
              </Link>
            </Button>
            
            {post.status === 'draft' && (
              <Button 
                variant="default" 
                size="sm" 
                onClick={() => handlePublishPost(post.id)}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white h-8 px-3 text-xs"
              >
                Publish
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );

  const EmptyState = ({ type }: { type: 'all' | 'published' | 'draft' }) => {
    const configs = {
      all: { icon: FileText, title: "No posts found", description: "Start creating your first blog post to see it here." },
      published: { icon: Eye, title: "No published posts", description: "Publish your drafts to make them visible to your audience." },
      draft: { icon: Clock, title: "No drafts found", description: "Create new drafts to work on your upcoming content." }
    };

    const config = configs[type];
    const IconComponent = config.icon;

    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center py-16 text-center"
      >
        <div className="w-24 h-24 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm border border-purple-500/20">
          <IconComponent className="w-12 h-12 text-purple-400" />
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-3">{config.title}</h3>
        <p className="text-gray-400 mb-8 max-w-md leading-relaxed">{config.description}</p>
        
        <Button 
          asChild
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg shadow-purple-900/25"
        >
          <Link href="/admin/blog/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            Create Your First Post
          </Link>
        </Button>
      </motion.div>
    );
  };

  return (
    <>
      <Head>
        <title>Blog Management | SERP Strategist</title>
        <meta name="description" content="Manage your blog posts and content" />
      </Head>

      <div className="min-h-screen bg-gray-950 text-gray-100 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/8 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/8 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4"></div>
        </div>
        
        <div className="container px-6 py-12 relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8"
          >
            <div>
              <h1 className="text-4xl font-bold tracking-tight mb-2">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                  Blog Management
                </span>
              </h1>
              <p className="text-xl text-gray-300">Create, edit, and manage your content</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                asChild
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-xl shadow-purple-900/25 hover:shadow-purple-900/40 transition-all duration-300"
              >
                <Link href="/admin/blog/new">
                  <PlusCircle className="mr-2 h-5 w-5" />
                  New Post
                </Link>
              </Button>
              <Button 
                variant="outline" 
                asChild
                className="border-gray-700 hover:border-purple-500 hover:text-purple-300 transition-colors"
              >
                <Link href="/blog">
                  <Eye className="mr-2 h-4 w-4" />
                  View Blog
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatsCard title="Total Posts" value={stats.totalPosts} color="purple" icon={FileText} delay={0} />
            <StatsCard title="Published" value={stats.publishedPosts} color="green" icon={Eye} delay={0.1} />
            <StatsCard title="Drafts" value={stats.draftPosts} color="yellow" icon={Clock} delay={0.2} />
            <StatsCard title="Total Views" value={stats.totalViews.toLocaleString()} color="blue" icon={BarChart3} delay={0.3} />
          </div>

          {error && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-500/10 border border-red-500/30 text-red-300 p-4 rounded-xl mb-6 backdrop-blur-sm"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                {error}
              </div>
            </motion.div>
          )}

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Tabs defaultValue="all" className="space-y-6">
              {/* Tab Navigation */}
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                <TabsList className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 p-1 rounded-xl">
                  <TabsTrigger 
                    value="all" 
                    onClick={() => setStatusFilter('all')}
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600/20 data-[state=active]:to-blue-600/20 data-[state=active]:text-purple-300 px-6 py-2 rounded-lg transition-all"
                  >
                    All Posts ({stats.totalPosts})
                  </TabsTrigger>
                  <TabsTrigger 
                    value="published" 
                    onClick={() => setStatusFilter('published')}
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600/20 data-[state=active]:to-blue-600/20 data-[state=active]:text-purple-300 px-6 py-2 rounded-lg transition-all"
                  >
                    Published ({stats.publishedPosts})
                  </TabsTrigger>
                  <TabsTrigger 
                    value="draft" 
                    onClick={() => setStatusFilter('draft')}
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600/20 data-[state=active]:to-blue-600/20 data-[state=active]:text-purple-300 px-6 py-2 rounded-lg transition-all"
                  >
                    Drafts ({stats.draftPosts})
                  </TabsTrigger>
                </TabsList>
                
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={handleRefresh}
                  className={`text-gray-400 hover:text-white hover:bg-gray-800/50 ${refreshing ? 'animate-spin' : ''}`}
                >
                  <RefreshCw className="h-4 w-4" />
                </Button>
              </div>
              
              {/* Search and Filter */}
              <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6">
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                    <Input
                      type="search"
                      placeholder="Search posts by title or content..."
                      className="pl-12 bg-gray-800/50 border-gray-700/50 focus:border-purple-500/50 text-white h-12 rounded-xl text-base"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  
                  <Select value={sortBy} onValueChange={(value) => setSortBy(value as any)}>
                    <SelectTrigger className="w-[200px] bg-gray-800/50 border-gray-700/50 text-gray-300 h-12 rounded-xl">
                      <div className="flex items-center">
                        <ArrowUpDown className="mr-2 h-4 w-4" />
                        <span>Sort by</span>
                      </div>
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-gray-800 text-gray-300">
                      <SelectItem value="newest">Newest first</SelectItem>
                      <SelectItem value="oldest">Oldest first</SelectItem>
                      <SelectItem value="title">Title (A-Z)</SelectItem>
                      <SelectItem value="views">Most views</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                {searchTerm && (
                  <div className="mt-4 pt-4 border-t border-gray-800/50">
                    <p className="text-gray-400">
                      Found {filteredPosts.length} result{filteredPosts.length !== 1 ? 's' : ''} for "{searchTerm}"
                    </p>
                  </div>
                )}
              </div>

              {/* Tab Content */}
              {['all', 'published', 'draft'].map((tabValue) => (
                <TabsContent key={tabValue} value={tabValue} className="mt-0 space-y-6">
                  {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {[...Array(6)].map((_, i) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: i * 0.1 }}
                          className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl overflow-hidden"
                        >
                          <div className="aspect-[16/9] bg-gray-800/50 animate-pulse"></div>
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
                  ) : filteredPosts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredPosts.map((post, index) => (
                        <PostCard key={post.id} post={post} index={index} />
                      ))}
                    </div>
                  ) : (
                    <EmptyState type={tabValue as any} />
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </div>
      </div>
    </>
  );
}
