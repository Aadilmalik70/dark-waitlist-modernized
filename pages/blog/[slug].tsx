import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Tag } from 'lucide-react';
import { PortableText } from '@portabletext/react';
import { postBySlugQuery, postSlugsQuery, relatedPostsQuery } from '@/lib/queries';
import { BlogPost, BlogPostPreview } from '@/types/blog';
import { BlogPostCard } from '@/components/blog/BlogPostCard';
import { Badge } from '@/components/ui/badge';
import client, { urlFor } from '@/lib/sanity';

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
            className="w-full rounded-xl"
          />
          {value.alt && (
            <p className="text-center text-gray-400 text-sm mt-2">{value.alt}</p>
          )}
        </div>
      );
    },
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-4xl font-bold text-white mb-6 mt-8">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-bold text-white mb-4 mt-6">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-bold text-white mb-3 mt-5">{children}</h3>
    ),
    normal: ({ children }: any) => (
      <p className="text-gray-300 leading-relaxed mb-4">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-purple-500 pl-6 py-4 my-6 bg-gray-900/40 rounded-r-xl">
        <div className="text-gray-300 italic">{children}</div>
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => (
      <a 
        href={value.href} 
        className="text-purple-400 hover:text-purple-300 underline"
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
      <code className="bg-gray-800 text-purple-300 px-2 py-1 rounded text-sm">
        {children}
      </code>
    ),
  },
};

export default function BlogPostPage({ post, relatedPosts }: BlogPostPageProps) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-white">Loading...</div>
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

  const imageUrl = post.mainImage ? urlFor(post.mainImage.asset).width(1200).height(600).url() : null;
  const authorAvatar = post.author.image ? urlFor(post.author.image.asset).width(64).height(64).url() : null;

  return (
    <>
      <Head>
        <title>{post.seo?.metaTitle || post.title} | SERP Strategist</title>
        <meta name="description" content={post.seo?.metaDescription || post.excerpt} />
        {post.seo?.keywords && (
          <meta name="keywords" content={post.seo.keywords.join(', ')} />
        )}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt || ''} />
        {imageUrl && <meta property="og:image" content={imageUrl} />}
        <meta property="article:published_time" content={post.publishedAt} />
        <meta property="article:author" content={post.author.name} />
      </Head>

      <div className="min-h-screen bg-gray-950 text-gray-100">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </div>

        {/* Navigation */}
        <div className="relative z-10 border-b border-gray-800/50 bg-gray-950/50 backdrop-blur-sm">
          <div className="container px-4 py-4">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </div>
        </div>

        <article className="relative z-10">
          {/* Hero Section */}
          <div className="container px-4 py-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              {/* Categories */}
              {post.categories && post.categories.length > 0 && (
                <div className="flex gap-2 mb-6">
                  {post.categories.map((category) => (
                    <Badge 
                      key={category._id}
                      className="bg-purple-500/20 text-purple-300 border-purple-500/30"
                    >
                      {category.title}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Title */}
              <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-blue-200">
                  {post.title}
                </span>
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
                <div className="flex items-center gap-2">
                  {authorAvatar ? (
                    <img 
                      src={authorAvatar} 
                      alt={post.author.name}
                      className="w-10 h-10 rounded-full ring-2 ring-purple-500/20"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                      <span className="text-white text-sm font-bold">
                        {post.author.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  )}
                  <span className="text-white font-medium">{post.author.name}</span>
                </div>
                
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(post.publishedAt)}</span>
                </div>

                {post.readingTime && (
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readingTime} min read</span>
                  </div>
                )}
              </div>

              {/* Featured Image */}
              {imageUrl && (
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-12">
                  <img 
                    src={imageUrl} 
                    alt={post.mainImage?.alt || post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </motion.div>
          </div>

          {/* Content */}
          <div className="container px-4 pb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <div className="prose prose-lg prose-invert max-w-none">
                {post.body && (
                  <PortableText 
                    value={post.body} 
                    components={portableTextComponents}
                  />
                )}
              </div>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-gray-800">
                  <div className="flex items-center gap-3 flex-wrap">
                    <Tag className="w-5 h-5 text-gray-400" />
                    {post.tags.map((tag) => (
                      <Badge 
                        key={tag}
                        variant="outline"
                        className="border-gray-600 text-gray-300"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="relative z-10 border-t border-gray-800/50 bg-gray-900/20">
            <div className="container px-4 py-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="max-w-7xl mx-auto"
              >
                <h2 className="text-3xl font-bold text-white mb-8 text-center">
                  Related Articles
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {relatedPosts.map((relatedPost) => (
                    <BlogPostCard key={relatedPost._id} post={relatedPost} />
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        )}
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
    revalidate: 60, // Revalidate every minute
  };
};
