import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Button } from '../../../components/ui/button';
import { PlusCircle, Edit, Trash2, Search, Filter, Eye, ArrowUpDown, RefreshCw } from 'lucide-react';
import { 
  Card,
  CardContent,
  CardDescription,
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
  DropdownMenuLabel,
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../../../components/ui/tooltip';
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
  tags?: string[];
  viewCount?: number;
}

export default function BlogAdminPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'published' | 'draft'>('all');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'title' | 'views'>('newest');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    filterAndSortPosts();
  }, [posts, searchTerm, statusFilter, sortBy]);

  const filterAndSortPosts = () => {
    let result = [...posts];
    
    // Apply status filter
    if (statusFilter !== 'all') {
      result = result.filter(post => post.status === statusFilter);
    }
    
    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(post => 
        post.title.toLowerCase().includes(term) || 
        (post.excerpt && post.excerpt.toLowerCase().includes(term))
      );
    }
    
    // Apply sorting
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
      // Fetch all posts (both draft and published)
      const response = await fetch('/api/blog/posts?status=all');
      
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      
      const data = await response.json();
      setPosts(data.posts || samplePosts); // Use sample data if API returns empty
    } catch (error) {
      console.error('Error fetching posts:', error);
      setError('Failed to load posts. Please try again.');
      setPosts(samplePosts); // Use sample data on error
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
    if (!confirm('Are you sure you want to delete this post?')) {
      return;
    }
    
    try {
      const response = await fetch(`/api/blog/posts/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete post');
      }
      
      // Refresh the post list
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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          status: 'published'
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to publish post');
      }
      
      // Refresh the post list
      fetchPosts();
    } catch (error) {
      console.error('Error publishing post:', error);
      setError('Failed to publish post. Please try again.');
    }
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'N/A';
    
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  // Sample posts for demonstration
  const samplePosts: BlogPost[] = [
    {
      id: '1',
      title: 'How to Create Content That Dominates Search Results',
      slug: 'create-content-that-dominates-search',
      excerpt: 'Learn the proven strategies for creating content that ranks at the top of search results and drives organic traffic to your website.',
      featuredImage: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      status: 'published',
      publishedAt: '2025-05-15T10:30:00Z',
      updatedAt: '2025-05-15T10:30:00Z',
      categories: ['Content Strategy', 'SEO'],
      viewCount: 243
    },
    {
      id: '2',
      title: 'Understanding Search Intent: The Key to Content Success',
      slug: 'understanding-search-intent',
      excerpt: 'Discover how understanding search intent can transform your content strategy and help you create more relevant, valuable content for your audience.',
      featuredImage: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      status: 'draft',
      publishedAt: null,
      updatedAt: '2025-05-10T14:45:00Z',
      categories: ['SEO', 'User Experience'],
      viewCount: 0
    },
    {
      id: '3',
      title: '5 Ways AI is Transforming Content Creation in 2025',
      slug: 'ai-transforming-content-creation',
      excerpt: 'Explore how artificial intelligence is revolutionizing the way we create, optimize, and distribute content in the digital landscape.',
      featuredImage: 'https://images.unsplash.com/photo-1677442135968-6d89469c5f97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
      status: 'published',
      publishedAt: '2025-05-05T09:15:00Z',
      updatedAt: '2025-05-06T11:20:00Z',
      categories: ['AI', 'Content Strategy'],
      viewCount: 187
    }
  ];

  const renderGridView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredPosts.map((post, index) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.05 * index }}
        >
          <Card className="flex flex-col h-full overflow-hidden hover:shadow-md transition-all bg-gray-900/50 backdrop-blur-sm border-gray-800">
            {post.featuredImage && (
              <div className="aspect-video w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-blue-900/30 opacity-60 z-10"></div>
                <img 
                  src={post.featuredImage} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            <CardHeader>
              <div className="flex justify-between items-start">
                <Badge variant={post.status === 'published' ? 'default' : 'outline'} className={post.status === 'published' ? 'bg-green-600/20 text-green-400 hover:bg-green-600/30' : 'border-gray-600 text-gray-400'}>
                  {post.status === 'published' ? 'Published' : 'Draft'}
                </Badge>
                {post.viewCount !== undefined && (
                  <div className="text-sm text-gray-400 flex items-center">
                    <Eye className="h-3 w-3 mr-1" />
                    {post.viewCount}
                  </div>
                )}
              </div>
              <CardTitle className="mt-2 line-clamp-2 text-gray-100">{post.title}</CardTitle>
              <CardDescription className="flex items-center text-sm text-gray-400">
                <span>Updated: {formatDate(post.updatedAt)}</span>
              </CardDescription>
            </CardHeader>
            
            {post.excerpt && (
              <CardContent>
                <p className="text-gray-400 line-clamp-3">{post.excerpt}</p>
              </CardContent>
            )}
            
            <CardFooter className="mt-auto pt-4 flex justify-between">
              <TooltipProvider>
                <div className="flex space-x-2">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        asChild
                        className="border-gray-700 hover:border-purple-500 hover:text-purple-400 transition-colors"
                      >
                        <Link href={`/admin/blog/edit/${post.id}`}>
                          <Edit className="h-4 w-4" />
                        </Link>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Edit post</p>
                    </TooltipContent>
                  </Tooltip>
                  
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        asChild
                        className="border-gray-700 hover:border-purple-500 hover:text-purple-400 transition-colors"
                      >
                        <Link href={`/blog/${post.slug}`} target="_blank">
                          <Eye className="h-4 w-4" />
                        </Link>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>View post</p>
                    </TooltipContent>
                  </Tooltip>
                  
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => handleDeletePost(post.id)}
                        className="border-gray-700 hover:border-red-500 hover:text-red-400 transition-colors"
                      >
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Delete post</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </TooltipProvider>
              
              {post.status === 'draft' && (
                <Button 
                  variant="default" 
                  size="sm" 
                  onClick={() => handlePublishPost(post.id)}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                >
                  Publish
                </Button>
              )}
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  );

  const renderListView = () => (
    <div className="border rounded-md overflow-hidden border-gray-800 bg-gray-900/50 backdrop-blur-sm">
      <div className="grid grid-cols-12 gap-4 p-4 bg-gray-800/50 font-medium text-gray-300">
        <div className="col-span-5">Title</div>
        <div className="col-span-2">Status</div>
        <div className="col-span-2">Updated</div>
        <div className="col-span-3 text-right">Actions</div>
      </div>
      
      <div className="divide-y divide-gray-800">
        {filteredPosts.map((post, index) => (
          <motion.div 
            key={post.id} 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.03 * index }}
            className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-gray-800/30"
          >
            <div className="col-span-5 font-medium truncate text-gray-200">{post.title}</div>
            <div className="col-span-2">
              <Badge variant={post.status === 'published' ? 'default' : 'outline'} className={post.status === 'published' ? 'bg-green-600/20 text-green-400 hover:bg-green-600/30' : 'border-gray-600 text-gray-400'}>
                {post.status === 'published' ? 'Published' : 'Draft'}
              </Badge>
            </div>
            <div className="col-span-2 text-sm text-gray-400">
              {formatDate(post.updatedAt)}
            </div>
            <div className="col-span-3 flex justify-end space-x-2">
              {post.status === 'draft' && (
                <Button 
                  variant="default" 
                  size="sm" 
                  onClick={() => handlePublishPost(post.id)}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                >
                  Publish
                </Button>
              )}
              <Button 
                variant="outline" 
                size="sm" 
                asChild
                className="border-gray-700 hover:border-purple-500 hover:text-purple-400 transition-colors"
              >
                <Link href={`/admin/blog/edit/${post.id}`}>
                  <Edit className="h-4 w-4" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                asChild
                className="border-gray-700 hover:border-purple-500 hover:text-purple-400 transition-colors"
              >
                <Link href={`/blog/${post.slug}`} target="_blank">
                  <Eye className="h-4 w-4" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => handleDeletePost(post.id)}
                className="border-gray-700 hover:border-red-500 hover:text-red-400 transition-colors"
              >
                <Trash2 className="h-4 w-4 text-red-500" />
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <Head>
        <title>Blog Admin | SERP Strategist</title>
        <meta name="description" content="Manage blog posts" />
      </Head>

      <div className="min-h-screen bg-gray-950 text-gray-100">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-3xl -z-10 opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-3xl -z-10 opacity-60"></div>
        
        <div className="container px-4 py-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8"
          >
            <div>
              <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">Blog Management</h1>
              <p className="text-gray-300 mt-1">
                Create, edit, and manage your blog posts
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                asChild
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg shadow-purple-900/20 hover:shadow-purple-900/40 transition-all"
              >
                <Link href="/admin/blog/new">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  New Post
                </Link>
              </Button>
              <Button 
                variant="outline" 
                asChild
                className="border-gray-700 hover:border-purple-500 transition-colors"
              >
                <Link href="/blog">
                  <Eye className="mr-2 h-4 w-4" />
                  View Blog
                </Link>
              </Button>
            </div>
          </motion.div>

          {error && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-500/10 border border-red-500/50 text-red-400 p-4 rounded-xl mb-6"
            >
              {error}
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Tabs defaultValue="all" className="mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 mb-4">
                <TabsList className="bg-gray-900/50 border border-gray-800">
                  <TabsTrigger 
                    value="all" 
                    onClick={() => setStatusFilter('all')}
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600/20 data-[state=active]:to-blue-600/20 data-[state=active]:text-purple-400 data-[state=active]:border-b-2 data-[state=active]:border-purple-500"
                  >
                    All Posts
                  </TabsTrigger>
                  <TabsTrigger 
                    value="published" 
                    onClick={() => setStatusFilter('published')}
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600/20 data-[state=active]:to-blue-600/20 data-[state=active]:text-purple-400 data-[state=active]:border-b-2 data-[state=active]:border-purple-500"
                  >
                    Published
                  </TabsTrigger>
                  <TabsTrigger 
                    value="draft" 
                    onClick={() => setStatusFilter('draft')}
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600/20 data-[state=active]:to-blue-600/20 data-[state=active]:text-purple-400 data-[state=active]:border-b-2 data-[state=active]:border-purple-500"
                  >
                    Drafts
                  </TabsTrigger>
                </TabsList>
                
                <div className="flex items-center space-x-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
                    className="text-gray-400 hover:text-white hover:bg-gray-800/50"
                  >
                    {viewMode === 'grid' ? 'List View' : 'Grid View'}
                  </Button>
                  
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={handleRefresh}
                    className={`text-gray-400 hover:text-white hover:bg-gray-800/50 ${refreshing ? 'animate-spin' : ''}`}
                  >
                    <RefreshCw className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
                <div className="relative flex-grow">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input
                    type="search"
                    placeholder="Search posts..."
                    className="pl-8 bg-gray-900/50 border-gray-800 focus:border-purple-500 text-white"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <Select
                  value={sortBy}
                  onValueChange={(value) => setSortBy(value as any)}
                >
                  <SelectTrigger className="w-[180px] bg-gray-900/50 border-gray-800 text-gray-300">
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

              <TabsContent value="all" className="mt-0">
                {loading ? (
                  <div className="flex items-center justify-center h-64 bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl">
                    <div className="flex flex-col items-center">
                      <RefreshCw className="h-8 w-8 animate-spin mb-4 text-purple-400" />
                      <p className="text-lg text-gray-300">Loading posts...</p>
                    </div>
                  </div>
                ) : filteredPosts.length > 0 ? (
                  viewMode === 'grid' ? renderGridView() : renderListView()
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center h-64 bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl"
                  >
                    <p className="text-lg mb-4 text-gray-300">No blog posts found</p>
                    <Button 
                      asChild
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                    >
                      <Link href="/admin/blog/new">
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Create Your First Post
                      </Link>
                    </Button>
                  </motion.div>
                )}
              </TabsContent>
              
              <TabsContent value="published" className="mt-0">
                {loading ? (
                  <div className="flex items-center justify-center h-64 bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl">
                    <div className="flex flex-col items-center">
                      <RefreshCw className="h-8 w-8 animate-spin mb-4 text-purple-400" />
                      <p className="text-lg text-gray-300">Loading posts...</p>
                    </div>
                  </div>
                ) : filteredPosts.length > 0 ? (
                  viewMode === 'grid' ? renderGridView() : renderListView()
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center h-64 bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl"
                  >
                    <p className="text-lg mb-4 text-gray-300">No published posts found</p>
                    <Button 
                      asChild
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                    >
                      <Link href="/admin/blog/new">
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Create New Post
                      </Link>
                    </Button>
                  </motion.div>
                )}
              </TabsContent>
              
              <TabsContent value="draft" className="mt-0">
                {loading ? (
                  <div className="flex items-center justify-center h-64 bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl">
                    <div className="flex flex-col items-center">
                      <RefreshCw className="h-8 w-8 animate-spin mb-4 text-purple-400" />
                      <p className="text-lg text-gray-300">Loading posts...</p>
                    </div>
                  </div>
                ) : filteredPosts.length > 0 ? (
                  viewMode === 'grid' ? renderGridView() : renderListView()
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center h-64 bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl"
                  >
                    <p className="text-lg mb-4 text-gray-300">No draft posts found</p>
                    <Button 
                      asChild
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                    >
                      <Link href="/admin/blog/new">
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Create New Draft
                      </Link>
                    </Button>
                  </motion.div>
                )}
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </>
  );
}
