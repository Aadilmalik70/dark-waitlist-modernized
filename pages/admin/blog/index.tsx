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
      setPosts(data.posts || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
      setError('Failed to load posts. Please try again.');
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

  const renderGridView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredPosts.map((post) => (
        <Card key={post.id} className="flex flex-col h-full overflow-hidden hover:shadow-md transition-all">
          {post.featuredImage && (
            <div className="aspect-video w-full overflow-hidden">
              <img 
                src={post.featuredImage} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <CardHeader>
            <div className="flex justify-between items-start">
              <Badge variant={post.status === 'published' ? 'default' : 'outline'}>
                {post.status === 'published' ? 'Published' : 'Draft'}
              </Badge>
              {post.viewCount !== undefined && (
                <div className="text-sm text-muted-foreground flex items-center">
                  <Eye className="h-3 w-3 mr-1" />
                  {post.viewCount}
                </div>
              )}
            </div>
            <CardTitle className="mt-2 line-clamp-2">{post.title}</CardTitle>
            <CardDescription className="flex items-center text-sm">
              <span>Updated: {formatDate(post.updatedAt)}</span>
            </CardDescription>
          </CardHeader>
          
          {post.excerpt && (
            <CardContent>
              <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
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
              >
                Publish
              </Button>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  );

  const renderListView = () => (
    <div className="border rounded-md overflow-hidden">
      <div className="grid grid-cols-12 gap-4 p-4 bg-muted/20 font-medium">
        <div className="col-span-5">Title</div>
        <div className="col-span-2">Status</div>
        <div className="col-span-2">Updated</div>
        <div className="col-span-3 text-right">Actions</div>
      </div>
      
      <div className="divide-y">
        {filteredPosts.map((post) => (
          <div key={post.id} className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-muted/10">
            <div className="col-span-5 font-medium truncate">{post.title}</div>
            <div className="col-span-2">
              <Badge variant={post.status === 'published' ? 'default' : 'outline'}>
                {post.status === 'published' ? 'Published' : 'Draft'}
              </Badge>
            </div>
            <div className="col-span-2 text-sm text-muted-foreground">
              {formatDate(post.updatedAt)}
            </div>
            <div className="col-span-3 flex justify-end space-x-2">
              {post.status === 'draft' && (
                <Button 
                  variant="default" 
                  size="sm" 
                  onClick={() => handlePublishPost(post.id)}
                >
                  Publish
                </Button>
              )}
              <Button 
                variant="outline" 
                size="sm" 
                asChild
              >
                <Link href={`/admin/blog/edit/${post.id}`}>
                  <Edit className="h-4 w-4" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                asChild
              >
                <Link href={`/blog/${post.slug}`} target="_blank">
                  <Eye className="h-4 w-4" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => handleDeletePost(post.id)}
              >
                <Trash2 className="h-4 w-4 text-red-500" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <Head>
        <title>Blog Admin | Dark Waitlist</title>
        <meta name="description" content="Manage blog posts" />
      </Head>

      <div className="container py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Blog Management</h1>
            <p className="text-muted-foreground mt-1">
              Create, edit, and manage your blog posts
            </p>
          </div>
          
          <div className="flex space-x-4">
            <Button asChild>
              <Link href="/admin/blog/new">
                <PlusCircle className="mr-2 h-4 w-4" />
                New Post
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/blog">
                View Blog
              </Link>
            </Button>
          </div>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-500 p-4 rounded-md mb-6">
            {error}
          </div>
        )}

        <Tabs defaultValue="all" className="mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 mb-4">
            <TabsList>
              <TabsTrigger 
                value="all" 
                onClick={() => setStatusFilter('all')}
              >
                All Posts
              </TabsTrigger>
              <TabsTrigger 
                value="published" 
                onClick={() => setStatusFilter('published')}
              >
                Published
              </TabsTrigger>
              <TabsTrigger 
                value="draft" 
                onClick={() => setStatusFilter('draft')}
              >
                Drafts
              </TabsTrigger>
            </TabsList>
            
            <div className="flex items-center space-x-2">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
              >
                {viewMode === 'grid' ? 'List View' : 'Grid View'}
              </Button>
              
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={handleRefresh}
                className={refreshing ? 'animate-spin' : ''}
              >
                <RefreshCw className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
            <div className="relative flex-grow">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search posts..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <Select
              value={sortBy}
              onValueChange={(value) => setSortBy(value as any)}
            >
              <SelectTrigger className="w-[180px]">
                <div className="flex items-center">
                  <ArrowUpDown className="mr-2 h-4 w-4" />
                  <span>Sort by</span>
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest first</SelectItem>
                <SelectItem value="oldest">Oldest first</SelectItem>
                <SelectItem value="title">Title (A-Z)</SelectItem>
                <SelectItem value="views">Most views</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <TabsContent value="all" className="mt-0">
            {loading ? (
              <div className="flex items-center justify-center h-64">
                <div className="flex flex-col items-center">
                  <RefreshCw className="h-8 w-8 animate-spin mb-4" />
                  <p className="text-lg">Loading posts...</p>
                </div>
              </div>
            ) : filteredPosts.length > 0 ? (
              viewMode === 'grid' ? renderGridView() : renderListView()
            ) : (
              <div className="flex flex-col items-center justify-center h-64 border rounded-md bg-muted/10">
                <p className="text-lg mb-4">No blog posts found</p>
                <Button asChild>
                  <Link href="/admin/blog/new">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Create Your First Post
                  </Link>
                </Button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="published" className="mt-0">
            {loading ? (
              <div className="flex items-center justify-center h-64">
                <div className="flex flex-col items-center">
                  <RefreshCw className="h-8 w-8 animate-spin mb-4" />
                  <p className="text-lg">Loading posts...</p>
                </div>
              </div>
            ) : filteredPosts.length > 0 ? (
              viewMode === 'grid' ? renderGridView() : renderListView()
            ) : (
              <div className="flex flex-col items-center justify-center h-64 border rounded-md bg-muted/10">
                <p className="text-lg mb-4">No published posts found</p>
                <Button asChild>
                  <Link href="/admin/blog/new">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Create New Post
                  </Link>
                </Button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="draft" className="mt-0">
            {loading ? (
              <div className="flex items-center justify-center h-64">
                <div className="flex flex-col items-center">
                  <RefreshCw className="h-8 w-8 animate-spin mb-4" />
                  <p className="text-lg">Loading posts...</p>
                </div>
              </div>
            ) : filteredPosts.length > 0 ? (
              viewMode === 'grid' ? renderGridView() : renderListView()
            ) : (
              <div className="flex flex-col items-center justify-center h-64 border rounded-md bg-muted/10">
                <p className="text-lg mb-4">No draft posts found</p>
                <Button asChild>
                  <Link href="/admin/blog/new">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Create New Draft
                  </Link>
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
