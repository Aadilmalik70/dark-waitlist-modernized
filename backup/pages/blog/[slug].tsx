import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, Eye, BookOpen, ThumbsUp } from 'lucide-react';
import { PortableText } from '@portabletext/react';
import { postBySlugQuery, postSlugsQuery, relatedPostsQuery } from '@/lib/queries';
import { BlogPost, BlogPostPreview } from '@/types/blog';
import { BlogPostCard } from '@/components/blog/BlogPostCard';
import { Badge } from '@/components/ui/badge';
import client, { urlFor } from '@/lib/sanity';
import {
  BlogPostSchema,
  BreadcrumbSchema,
  FAQSchema,
  HowToSchema,
  AuthorSchema,
  DEFAULT_SEO_CONFIG,
  generateCanonicalUrl,
  generateOGImageUrl,
  calculateReadingTime,
  generateMetaDescription,
  extractKeywords
} from '@/components/seo';

interface BlogPostPageProps {
  post: BlogPost;
  relatedPosts: BlogPostPreview[];
}

const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      const imageUrl = urlFor(value.asset).width(800).url();
      return (
        <div className="my-8">
          <img 
            src={imageUrl} 
            alt={value.alt || ''} 
            className="w-full rounded-xl shadow-2xl"
            loading="lazy"
          />
          {value.alt && (
            <p className="text-center text-gray-400 text-sm mt-3 italic">{value.alt}</p>
          )}
        </div>
      );
    },
    
    // FAQ block type for rich snippets
    faq: ({ value }: any) => {
      if (!value.faqs || value.faqs.length === 0) return null;
      return (
        <div className="my-12 p-8 bg-gradient-to-br from-gray-900/60 to-gray-800/40 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">?</span>
            </div>
            <h3 className="text-3xl font-bold text-white">Frequently Asked Questions</h3>
          </div>
          <div className="space-y-6">
            {value.faqs.map((faq: any, index: number) => (
              <details key={index} className="group bg-gray-800/30 rounded-xl border border-gray-700/30 overflow-hidden">
                <summary className="cursor-pointer p-6 text-lg font-semibold text-purple-300 hover:text-purple-200 transition-colors bg-gray-800/20 hover:bg-gray-700/30">
                  <div className="flex items-center justify-between">
                    <span>{faq.question}</span>
                    <div className="transform group-open:rotate-180 transition-transform">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </summary>
                <div className="p-6 pt-0 text-gray-300 leading-relaxed">
                  <div className="mt-4 pl-4 border-l-2 border-purple-500/30">
                    {faq.answer}
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      );
    },
    
    // How-To block type for step-by-step guides
    howTo: ({ value }: any) => {
      if (!value.steps || value.steps.length === 0) return null;
      return (
        <div className="my-12 p-8 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl border border-blue-500/20 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white">{value.title || 'Step-by-Step Guide'}</h3>
          </div>
          <div className="space-y-8">
            {value.steps.map((step: any, index: number) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {index + 1}
                </div>
                <div className="flex-1 bg-gray-800/30 rounded-xl p-6 border border-gray-700/30">
                  <h4 className="text-xl font-semibold text-white mb-3">{step.name}</h4>
                  <p className="text-gray-300 leading-relaxed mb-4">{step.description}</p>
                  {step.image && (
                    <div className="mt-4">
                      <img 
                        src={urlFor(step.image.asset).width(500).url()} 
                        alt={step.image.alt || step.name}
                        className="rounded-lg max-w-full h-auto shadow-lg"
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    },

    // Code block with syntax highlighting
    code: ({ value }: any) => (
      <div className="my-8">
        <div className="bg-gray-900 rounded-t-xl px-4 py-2 border-b border-gray-700">
          <span className="text-gray-400 text-sm">{value.language || 'Code'}</span>
        </div>
        <pre className="bg-gray-950 p-6 rounded-b-xl overflow-x-auto">
          <code className="text-green-400 text-sm font-mono">{value.code}</code>
        </pre>
      </div>
    )
  },
  
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 mt-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 mt-10 relative">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300">
          {children}
        </span>
        <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 mt-8">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl md:text-2xl font-semibold text-white mb-3 mt-6">{children}</h4>
    ),
    normal: ({ children }: any) => (
      <p className="text-gray-300 leading-relaxed mb-6 text-lg">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-purple-500 pl-8 py-6 my-8 bg-gradient-to-r from-gray-900/40 to-transparent rounded-r-xl">
        <div className="text-gray-200 italic text-lg leading-relaxed">{children}</div>
      </blockquote>
    ),
  },
  
  marks: {
    link: ({ children, value }: any) => (
      <a 
        href={value.href} 
        className="text-purple-400 hover:text-purple-300 underline decoration-purple-500/50 hover:decoration-purple-400 transition-colors"
        target="_blank" 
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    strong: ({ children }: any) => (
      <strong className="font-bold text-white">{children}</strong>
    ),
    em: ({ children }: any) => (
      <em className="italic text-purple-300">{children}</em>
    ),
    code: ({ children }: any) => (
      <code className="bg-gray-800 text-purple-300 px-2 py-1 rounded-md text-sm font-mono border border-gray-700">
        {children}
      </code>
    ),
  },
};

export default function BlogPostPage({ post, relatedPosts }: BlogPostPageProps) {
  const router = useRouter();

  // Reading progress state
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Set initial value
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (router.isFallback) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <div className="text-white text-lg">Loading amazing content...</div>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Generate URLs and meta data
  const siteUrl = DEFAULT_SEO_CONFIG.url;
  const pageUrl = generateCanonicalUrl(`/blog/${post.slug.current}`, siteUrl);
  const imageUrl = post.mainImage ? urlFor(post.mainImage.asset).width(1200).height(600).url() : null;
  const authorAvatar = post.author.image ? urlFor(post.author.image.asset).width(80).height(80).url() : null;
  
  // SEO optimizations
  const metaTitle = post.seo?.metaTitle || `${post.title} | SERP Strategist`;
  const metaDescription = post.seo?.metaDescription || generateMetaDescription(post.body) || post.excerpt || '';
  const keywords = post.seo?.keywords || extractKeywords(post.body, post.title);
  const readingTime = post.readingTime || calculateReadingTime(post.body);
  
  const ogImageUrl = imageUrl || generateOGImageUrl(
    post.title,
    metaDescription,
    siteUrl
  );

  // Breadcrumb data
  const breadcrumbs = [
    { name: 'Home', url: siteUrl },
    { name: 'Blog', url: `${siteUrl}/blog` },
    ...(post.categories?.[0] ? [{
      name: post.categories[0].title,
      url: `${siteUrl}/blog/category/${post.categories[0].slug.current}`
    }] : []),
    { name: post.title, url: pageUrl }
  ];

  // Extract structured content for schema
  const faqBlocks = post.body?.filter((block: any) => block._type === 'faq') || [];
  const howToBlocks = post.body?.filter((block: any) => block._type === 'howTo') || [];
  
  const faqs = faqBlocks.length > 0 ? faqBlocks[0].faqs : null;
  const howToSteps = howToBlocks.length > 0 ? howToBlocks[0].steps : null;

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={keywords.join(', ')} />
        <link rel="canonical" href={pageUrl} />
        <meta name="author" content={post.author.name} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        
        {/* Open Graph */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="SERP Strategist" />
        <meta property="article:published_time" content={post.publishedAt} />
        <meta property="article:modified_time" content={post._updatedAt} />
        <meta property="article:author" content={post.author.name} />
        {post.categories?.map(category => (
          <meta key={category._id} property="article:section" content={category.title} />
        ))}
        {post.tags?.map(tag => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={ogImageUrl} />
        <meta name="twitter:creator" content={post.author.socialLinks?.twitter || '@serpstrategist'} />
        <meta name="twitter:site" content="@serpstrategist" />
        
        {/* Schema Markup */}
        <BlogPostSchema 
          post={{
            ...post,
            featuredImage: imageUrl ? { url: imageUrl, width: 1200, height: 600 } : undefined,
            content: post.body,
            readingTime,
            updatedAt: post._updatedAt
          }}
          author={{
            ...post.author,
            image: authorAvatar ? { url: authorAvatar, width: 80, height: 80 } : undefined,
            socialLinks: post.author.socialLinks ? 
              Object.values(post.author.socialLinks).filter(Boolean) : []
          }}
          siteUrl={siteUrl}
        />
        
        <AuthorSchema 
          author={{
            ...post.author,
            image: authorAvatar ? { url: authorAvatar, width: 80, height: 80 } : undefined,
            socialLinks: post.author.socialLinks ? 
              Object.values(post.author.socialLinks).filter(Boolean) : []
          }}
          posts={[]}
          siteUrl={siteUrl}
        />
        
        <BreadcrumbSchema items={breadcrumbs} />
        
        {/* FAQ Schema */}
        {faqs && faqs.length > 0 && (
          <FAQSchema 
            faqs={faqs.map((faq: any) => ({
              question: faq.question,
              answer: faq.answer
            }))}
            pageUrl={pageUrl}
          />
        )}
        
        {/* How-To Schema */}
        {howToSteps && howToSteps.length > 0 && (
          <HowToSchema
            title={post.title}
            description={metaDescription}
            steps={howToSteps.map((step: any) => ({
              name: step.name,
              text: step.description,
              image: step.image ? urlFor(step.image.asset).url() : undefined
            }))}
            totalTime={readingTime ? `PT${readingTime}M` : undefined}
            pageUrl={pageUrl}
            image={ogImageUrl}
          />
        )}
      </Head>

      <div className="min-h-screen bg-gray-950 text-gray-100">
        {/* Enhanced Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-purple-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        {/* Enhanced Navigation */}
        <div className="relative z-10 border-b border-gray-800/50 bg-gray-950/80 backdrop-blur-xl sticky top-0">
          <div className="container px-4 py-4">
            <div className="flex items-center justify-between">
              <Link 
                href="/blog" 
                className="inline-flex items-center text-gray-400 hover:text-white transition-all duration-300 group"
              >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Blog
              </Link>
              
              <div className="flex items-center gap-3">
                {/* Progress indicator */}
                <div className="hidden md:flex items-center gap-2 text-sm text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>{readingTime} min read</span>
                </div>
                
                {/* Share Button */}
                <button 
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: post.title,
                        text: metaDescription,
                        url: pageUrl
                      });
                    } else {
                      navigator.clipboard.writeText(pageUrl);
                    }
                  }}
                  className="inline-flex items-center px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg hover:bg-purple-500/30 transition-all duration-300 border border-purple-500/30 hover:border-purple-500/50"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>

        <article className="relative z-10">
          {/* Enhanced Hero Section */}
          <div className="container px-4 py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto"
            >
              {/* Categories */}
              {post.categories && post.categories.length > 0 && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="flex gap-3 mb-8"
                >
                  {post.categories.map((category) => (
                    <Badge 
                      key={category._id}
                      className="bg-purple-500/20 text-purple-300 border-purple-500/30 px-4 py-2 text-sm font-medium hover:bg-purple-500/30 transition-colors"
                    >
                      {category.title}
                    </Badge>
                  ))}
                </motion.div>
              )}

              {/* Title */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-blue-200">
                  {post.title}
                </span>
              </motion.h1>

              {/* Excerpt */}
              {post.excerpt && (
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12 max-w-4xl"
                >
                  {post.excerpt}
                </motion.p>
              )}

              {/* Enhanced Meta Info */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap items-center gap-8 text-gray-400 mb-12"
              >
                <div className="flex items-center gap-4">
                  {authorAvatar ? (
                    <img 
                      src={authorAvatar} 
                      alt={post.author.name}
                      className="w-14 h-14 rounded-full ring-2 ring-purple-500/30 shadow-lg"
                    />
                  ) : (
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg">
                      <span className="text-white text-lg font-bold">
                        {post.author.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  )}
                  <div className="flex flex-col">
                    <span className="text-white font-semibold text-lg">{post.author.name}</span>
                    {post.author.position && (
                      <span className="text-sm text-purple-300">{post.author.position}</span>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span className="font-medium">{formatDate(post.publishedAt)}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span className="font-medium">{readingTime} min read</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  <span className="font-medium">2.3k views</span>
                </div>

                <div className="flex items-center gap-2">
                  <ThumbsUp className="w-5 h-5" />
                  <span className="font-medium">98% liked</span>
                </div>
              </motion.div>

              {/* Enhanced Featured Image */}
              {imageUrl && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-16 group shadow-2xl"
                >
                  <img 
                    src={imageUrl} 
                    alt={post.mainImage?.alt || post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-white text-sm bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                      {post.mainImage?.alt || post.title}
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* Enhanced Content */}
          <div className="container px-4 pb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <div className="prose prose-xl prose-invert max-w-none">
                {post.body && (
                  <PortableText 
                    value={post.body} 
                    components={portableTextComponents}
                  />
                )}
              </div>

              {/* Enhanced Author Bio */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-20 p-10 bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-3xl shadow-2xl"
              >
                <div className="flex items-start gap-8">
                  {authorAvatar ? (
                    <img 
                      src={authorAvatar} 
                      alt={post.author.name}
                      className="w-24 h-24 rounded-full ring-4 ring-purple-500/30 flex-shrink-0 shadow-xl"
                    />
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0 shadow-xl">
                      <span className="text-white text-3xl font-bold">
                        {post.author.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  )}
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">About {post.author.name}</h3>
                    {post.author.position && (
                      <p className="text-purple-300 font-medium mb-4 text-lg">{post.author.position}</p>
                    )}
                    {post.author.bio && (
                      <p className="text-gray-300 leading-relaxed mb-6 text-lg">{post.author.bio}</p>
                    )}
                    
                    {/* Enhanced Social Links */}
                    {post.author.socialLinks && (
                      <div className="flex gap-4">
                        {post.author.socialLinks.twitter && (
                          <a 
                            href={post.author.socialLinks.twitter}
                            className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-500/30 transition-all duration-300 border border-blue-500/30 hover:border-blue-500/50"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Twitter
                          </a>
                        )}
                        {post.author.socialLinks.linkedin && (
                          <a 
                            href={post.author.socialLinks.linkedin}
                            className="px-4 py-2 bg-blue-600/20 text-blue-300 rounded-lg hover:bg-blue-600/30 transition-all duration-300 border border-blue-600/30 hover:border-blue-600/50"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            LinkedIn
                          </a>
                        )}
                        {post.author.socialLinks.website && (
                          <a 
                            href={post.author.socialLinks.website}
                            className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg hover:bg-purple-500/30 transition-all duration-300 border border-purple-500/30 hover:border-purple-500/50"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Website
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>

              {/* Enhanced Tags Section */}
              {post.tags && post.tags.length > 0 && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="mt-12 pt-8 border-t border-gray-800"
                >
                  <div className="flex items-center gap-4 flex-wrap">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Tag className="w-5 h-5" />
                      <span className="font-medium">Tags:</span>
                    </div>
                    <div className="flex gap-3 flex-wrap">
                      {post.tags.map((tag) => (
                        <Badge 
                          key={tag}
                          variant="outline"
                          className="border-gray-600 text-gray-300 hover:border-purple-500 hover:text-purple-300 hover:bg-purple-500/10 transition-all duration-300 cursor-pointer px-3 py-1"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
              
              {/* Enhanced Social Sharing */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mt-12 pt-8 border-t border-gray-800"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-center gap-3">
                    <Share2 className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300 font-medium text-lg">Share this article:</span>
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(post.title)}&via=serpstrategist`}
                      className="flex items-center gap-2 px-6 py-3 bg-blue-500/20 text-blue-300 rounded-xl hover:bg-blue-500/30 transition-all duration-300 border border-blue-500/30 hover:border-blue-500/50"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                      </svg>
                      Twitter
                    </a>
                    <a 
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`}
                      className="flex items-center gap-2 px-6 py-3 bg-blue-600/20 text-blue-300 rounded-xl hover:bg-blue-600/30 transition-all duration-300 border border-blue-600/30 hover:border-blue-600/50"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      LinkedIn
                    </a>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(pageUrl);
                        // Add toast notification here
                      }}
                      className="flex items-center gap-2 px-6 py-3 bg-gray-600/20 text-gray-300 rounded-xl hover:bg-gray-600/30 transition-all duration-300 border border-gray-600/30 hover:border-gray-600/50"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Copy Link
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </article>

        {/* Enhanced Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="relative z-10 border-t border-gray-800/50 bg-gradient-to-br from-gray-900/20 to-gray-800/10">
            <div className="container px-4 py-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-7xl mx-auto"
              >
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                      Continue Reading
                    </span>
                  </h2>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    Discover more insights and strategies to enhance your SEO knowledge
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {relatedPosts.slice(0, 3).map((relatedPost, index) => (
                    <motion.div
                      key={relatedPost._id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                    >
                      <BlogPostCard post={relatedPost} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        )}
        
        {/* Enhanced Newsletter CTA */}
        <section className="relative z-10 border-t border-gray-800/50 bg-gradient-to-br from-purple-900/10 to-blue-900/10">
          <div className="container px-4 py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-12 shadow-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                    Master SEO Like a Pro
                  </span>
                </h3>
                
                <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                  Join 50,000+ marketers getting exclusive SEO strategies, case studies, and insider tips delivered weekly. 
                  <span className="text-purple-300 font-medium"> No spam, just pure value.</span>
                </p>
                
                <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input 
                    type="email" 
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all backdrop-blur-sm"
                    required
                  />
                  <button 
                    type="submit"
                    className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 hover:scale-105"
                  >
                    Subscribe Free
                  </button>
                </form>
                
                <p className="text-sm text-gray-400 mt-6">
                  ✓ Unsubscribe anytime  ✓ 100% privacy guaranteed  ✓ Join top marketers
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Reading Progress Bar */}
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
          <div 
            className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-150"
            style={{
              width: `${scrollProgress}%`
            }}
          />
        </div>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await client.fetch(postSlugsQuery);
  
  const paths = slugs.map((slug: string) => ({
    params: { slug }
  }));

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  
  if (!slug) {
    return { notFound: true };
  }

  const post = await client.fetch(postBySlugQuery, { slug });
  
  if (!post) {
    return { notFound: true };
  }

  // Get related posts
  const categoryIds = post.categories?.map((cat: any) => cat._id) || [];
  const relatedPosts = await client.fetch(relatedPostsQuery, {
    postId: post._id,
    categoryIds,
  });

  return {
    props: {
      post,
      relatedPosts: relatedPosts || [],
    },
    revalidate: 3600, // Revalidate every hour
  };
};