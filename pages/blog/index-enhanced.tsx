import { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, Users, Calendar, Search, Filter, Grid, List } from 'lucide-react';
import client from '../../lib/sanity';
import { postsQuery, featuredPostsQuery } from '../../lib/queries';
import { BlogPostCard } from '../../components/blog/BlogPostCard';
import { BlogHeader } from '../../components/blog/BlogHeader';
import { BlogSearch } from '../../components/blog/BlogSearch';
import { EmptyState } from '../../components/blog/EmptyState';
import { 
  BlogListSchema, 
  WebsiteSchema, 
  BreadcrumbSchema,
  DEFAULT_SEO_CONFIG,
  generateOGImageUrl,
  generateCanonicalUrl
} from '../../components/seo';
import { BlogPost } from '../../types/blog';

interface BlogPageProps {
  initialPosts: BlogPost[];
  featuredPosts: BlogPost[];
  currentPage: number;
  totalPages: number;
  totalPosts: number;
  categories: Array<{
    _id: string;
    title: string;
    slug: { current: string };
    count: number;
  }>;
}

export default function BlogPage({ 
  initialPosts, 
  featuredPosts, 
  currentPage = 1,
  totalPages = 1,
  totalPosts = 0,
  categories = []
}: BlogPageProps) {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts || []);
  const [loading, setLoading] = useState(!initialPosts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredPosts = posts.filter(post => {
    const matchesSearch = !searchTerm || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (post.excerpt && post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = !selectedCategory || 
      post.categories?.some(cat => cat._id === selectedCategory);
    
    return matchesSearch && matchesCategory;
  });

  const hasContent = posts.length > 0;
  const siteUrl = DEFAULT_SEO_CONFIG.url;
  const pageUrl = generateCanonicalUrl('/blog', siteUrl);
  const ogImageUrl = generateOGImageUrl(
    'SERP Strategist Blog',
    'Latest strategies and insights for search engine optimization and content marketing',
    siteUrl
  );

  // Breadcrumb data
  const breadcrumbs = [
    { name: 'Home', url: siteUrl },
    { name: 'Blog', url: pageUrl }
  ];

  // Calculate blog statistics
  const totalReadingTime = posts.reduce((total, post) => total + (post.readingTime || 5), 0);
  const averageReadingTime = Math.round(totalReadingTime / Math.max(posts.length, 1));

  return (
    <>
      <Head>
        <title>Blog | SERP Strategist - SEO Strategies & Content Marketing Insights</title>
        <meta 
          name="description" 
          content="Discover proven SEO strategies, content marketing insights, and SERP optimization techniques. Expert guides, case studies, and actionable tips to dominate search results." 
        />
        <meta 
          name="keywords" 
          content="SEO blog, content marketing strategies, SERP optimization, search engine rankings, digital marketing insights, SEO case studies, content creation tips" 
        />
        <link rel="canonical" href={pageUrl} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Blog | SERP Strategist - SEO Strategies & Content Marketing" />
        <meta property="og:description" content="Discover proven SEO strategies, content marketing insights, and SERP optimization techniques." />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SERP Strategist" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog | SERP Strategist - SEO Strategies & Content Marketing" />
        <meta name="twitter:description" content="Discover proven SEO strategies, content marketing insights, and SERP optimization techniques." />
        <meta name="twitter:image" content={ogImageUrl} />
        <meta name="twitter:site" content="@serpstrategist" />
        
        {/* Schema Markup */}
        <WebsiteSchema 
          siteUrl={siteUrl}
          siteName={DEFAULT_SEO_CONFIG.name}
          description={DEFAULT_SEO_CONFIG.description}
        />
        
        <BlogListSchema 
          posts={posts}
          siteUrl={siteUrl}
          currentPage={currentPage}
          totalPages={totalPages}
        />
        
        <BreadcrumbSchema items={breadcrumbs} />

        {/* Additional Blog-specific Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "@id": `${pageUrl}#collection`,
              "name": "SERP Strategist Blog",
              "description": "Expert SEO strategies, content marketing insights, and digital marketing guides",
              "url": pageUrl,
              "mainEntity": {
                "@type": "Blog",
                "@id": `${pageUrl}#blog`,
                "name": "SERP Strategist Blog",
                "description": "Expert insights on SEO strategies, content marketing, and SERP optimization techniques",
                "publisher": {
                  "@type": "Organization",
                  "@id": `${siteUrl}/#organization`
                },
                "blogPost": posts.slice(0, 10).map(post => ({
                  "@type": "BlogPosting",
                  "@id": `${siteUrl}/blog/${post.slug.current}`,
                  "headline": post.title,
                  "url": `${siteUrl}/blog/${post.slug.current}`,
                  "datePublished": post.publishedAt,
                  "author": {
                    "@type": "Person",
                    "name": post.author.name
                  }
                }))
              },
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": breadcrumbs.map((crumb, index) => ({
                  "@type": "ListItem",
                  "position": index + 1,
                  "name": crumb.name,
                  "item": crumb.url
                }))
              }
            }, null, 2)
          }}
        />
      </Head>

      <div className="min-h-screen bg-gray-950 text-gray-100 relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[1200px] h-[1200px] bg-purple-900/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[1000px] h-[1000px] bg-blue-900/8 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-purple-500/4 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <BlogHeader />

        <div className="container px-4 py-20 relative z-10">
          {/* Enhanced Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-6xl mx-auto mb-20 text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full text-purple-300 text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4 mr-2" />
              <span>Fresh insights & proven strategies</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-blue-200">
                Expert
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400">
                SEO Insights
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12">
              Discover the latest strategies and insights to help you create content that 
              <span className="text-purple-300 font-medium"> dominates search results</span> and 
              drives meaningful engagement. From beginner guides to advanced tactics.
            </p>
            
            {/* Enhanced Blog Stats */}
            {totalPosts > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
              >
                <div className="text-center p-6 bg-gray-900/20 backdrop-blur-sm rounded-2xl border border-gray-800/50">
                  <div className="text-3xl font-bold text-purple-300 mb-2">{totalPosts}</div>
                  <div className="text-gray-400 text-sm">Expert Articles</div>
                </div>
                <div className="text-center p-6 bg-gray-900/20 backdrop-blur-sm rounded-2xl border border-gray-800/50">
                  <div className="text-3xl font-bold text-blue-300 mb-2">{featuredPosts.length}</div>
                  <div className="text-gray-400 text-sm">Featured Guides</div>
                </div>
                <div className="text-center p-6 bg-gray-900/20 backdrop-blur-sm rounded-2xl border border-gray-800/50">
                  <div className="text-3xl font-bold text-green-300 mb-2">{categories.length}</div>
                  <div className="text-gray-400 text-sm">Categories</div>
                </div>
                <div className="text-center p-6 bg-gray-900/20 backdrop-blur-sm rounded-2xl border border-gray-800/50">
                  <div className="text-3xl font-bold text-yellow-300 mb-2">{averageReadingTime}</div>
                  <div className="text-gray-400 text-sm">Avg. Read Time</div>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Featured Posts Section */}
          {featuredPosts.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-20"
            >
              <div className="flex items-center justify-between mb-12">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                      Featured Articles
                    </span>
                  </h2>
                  <p className="text-xl text-gray-300">
                    Our most popular and impactful SEO strategies
                  </p>
                </div>
                <div className="hidden md:flex items-center gap-2 text-sm text-gray-400">
                  <TrendingUp className="w-4 h-4" />
                  <span>Trending Now</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {featuredPosts.slice(0, 3).map((post, index) => (
                  <motion.div
                    key={post._id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="group"
                  >
                    <BlogPostCard post={post} featured />
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Enhanced Search and Filters */}
          {hasContent && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-16"
            >
              <div className="max-w-6xl mx-auto">
                <div className="bg-gray-900/20 backdrop-blur-sm border border-gray-800/50 rounded-3xl p-8">
                  <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                    {/* Search Bar */}
                    <div className="flex-1 w-full lg:max-w-md">
                      <div className="relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          placeholder="Search articles..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                        />
                      </div>
                    </div>

                    {/* Category Filter */}
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Filter className="w-4 h-4" />
                        <span className="text-sm font-medium">Filter:</span>
                      </div>
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                      >
                        <option value="">All Categories</option>
                        {categories.map(category => (
                          <option key={category._id} value={category._id}>
                            {category.title} ({category.count})
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* View Mode Toggle */}
                    <div className="flex items-center gap-2 bg-gray-800/30 rounded-lg p-1">
                      <button
                        onClick={() => setViewMode('grid')}
                        className={`p-2 rounded transition-colors ${
                          viewMode === 'grid' 
                            ? 'bg-purple-500 text-white' 
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        <Grid className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setViewMode('list')}
                        className={`p-2 rounded transition-colors ${
                          viewMode === 'list' 
                            ? 'bg-purple-500 text-white' 
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        <List className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Search Results Info */}
                  {(searchTerm || selectedCategory) && (
                    <div className="mt-6 pt-6 border-t border-gray-800/50">
                      <div className="flex items-center justify-between">
                        <p className="text-gray-300">
                          Found <span className="font-semibold text-purple-300">{filteredPosts.length}</span> articles
                          {searchTerm && (
                            <span> for "<span className="text-purple-300">{searchTerm}</span>"</span>
                          )}
                          {selectedCategory && (
                            <span> in <span className="text-purple-300">
                              {categories.find(cat => cat._id === selectedCategory)?.title}
                            </span></span>
                          )}
                        </p>
                        {(searchTerm || selectedCategory) && (
                          <button
                            onClick={() => {
                              setSearchTerm('');
                              setSelectedCategory('');
                            }}
                            className="text-sm text-gray-400 hover:text-white transition-colors"
                          >
                            Clear filters
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.section>
          )}

          {/* Content Section */}
          {loading ? (
            <div className="max-w-7xl mx-auto">
              <div className={`grid gap-8 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
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
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  {featuredPosts.length > 0 ? 'All Articles' : 'Latest Articles'}
                  {(searchTerm || selectedCategory) && (
                    <span className="block text-lg font-normal text-gray-400 mt-2">
                      {filteredPosts.length} results
                    </span>
                  )}
                </h2>
                
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Users className="w-4 h-4" />
                  <span>{totalPosts} total articles</span>
                </div>
              </div>
              
              <div className={`grid gap-8 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                  : 'grid-cols-1 max-w-4xl mx-auto'
              }`}>
                {filteredPosts.map((post, index) => (
                  <motion.div
                    key={post._id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    <BlogPostCard post={post} layout={viewMode} />
                  </motion.div>
                ))}
              </div>
              
              {/* Pagination */}
              {totalPages > 1 && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-16 flex justify-center"
                >
                  <div className="flex items-center gap-4">
                    {currentPage > 1 && (
                      <Link
                        href={`/blog?page=${currentPage - 1}`}
                        className="px-6 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-700/50 hover:text-white transition-all"
                      >
                        Previous
                      </Link>
                    )}
                    
                    <div className="flex items-center gap-2">
                      {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                        const pageNum = i + Math.max(1, currentPage - 2);
                        if (pageNum > totalPages) return null;
                        
                        return (
                          <Link
                            key={pageNum}
                            href={`/blog?page=${pageNum}`}
                            className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all ${
                              pageNum === currentPage
                                ? 'bg-purple-500 text-white'
                                : 'bg-gray-800/50 border border-gray-700 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                            }`}
                          >
                            {pageNum}
                          </Link>
                        );
                      })}
                    </div>
                    
                    {currentPage < totalPages && (
                      <Link
                        href={`/blog?page=${currentPage + 1}`}
                        className="px-6 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-700/50 hover:text-white transition-all"
                      >
                        Next
                      </Link>
                    )}
                  </div>
                  
                  <div className="mt-4 text-center text-gray-400 text-sm">
                    Page {currentPage} of {totalPages} • {totalPosts} total articles
                  </div>
                </motion.div>
              )}
            </motion.div>
          ) : (
            <EmptyState />
          )}
        </div>

        {/* Newsletter CTA */}
        <section className="relative z-10 border-t border-gray-800/50 bg-gradient-to-br from-purple-900/10 to-blue-900/10">
          <div className="container px-4 py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-12 shadow-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                    Never Miss an Update
                  </span>
                </h3>
                
                <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                  Get the latest SEO strategies, case studies, and insider tips delivered to your inbox. 
                  Join <span className="text-purple-300 font-medium">50,000+ marketers</span> who trust our insights.
                </p>
                
                <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input 
                    type="email" 
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    required
                  />
                  <button 
                    type="submit"
                    className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                  >
                    Subscribe Free
                  </button>
                </form>
                
                <p className="text-sm text-gray-400 mt-6">
                  ✓ Weekly insights  ✓ No spam ever  ✓ Unsubscribe anytime
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const page = parseInt(context.query.page as string) || 1;
    const postsPerPage = 12;
    const start = (page - 1) * postsPerPage;
    const end = start + postsPerPage;

    const [posts, featuredPosts, totalCount, categories] = await Promise.all([
      client.fetch(postsQuery, { start, end }),
      client.fetch(featuredPostsQuery),
      client.fetch(`count(*[_type == "post" && !(_id in path("drafts.**"))])`),
      client.fetch(`
        *[_type == "category"] {
          _id,
          title,
          slug,
          "count": count(*[_type == "post" && references(^._id) && !(_id in path("drafts.**"))])
        } | order(count desc)
      `),
    ]);

    const totalPages = Math.ceil(totalCount / postsPerPage);

    return {
      props: {
        initialPosts: posts || [],
        featuredPosts: featuredPosts || [],
        currentPage: page,
        totalPages,
        totalPosts: totalCount || 0,
        categories: categories || [],
      }
    };
  } catch (error) {
    console.error('Error fetching blog data:', error);
    return {
      props: {
        initialPosts: [],
        featuredPosts: [],
        currentPage: 1,
        totalPages: 1,
        totalPosts: 0,
        categories: [],
      }
    };
  }
};