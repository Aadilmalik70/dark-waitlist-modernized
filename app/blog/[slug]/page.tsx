import { notFound } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import { client, postBySlugQuery } from '../../../lib/sanity';
import { components } from '../../../lib/portableText';
import { urlFor } from '../../../lib/sanity';
import { Badge } from '../../../components/ui/badge';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../../../components/ui/button';

interface SanityBlogPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt?: string;
  mainImage?: {
    asset: {
      _ref: string;
    };
    alt?: string;
  };
  author?: {
    name: string;
    bio?: any[];
    image?: {
      asset: {
        _ref: string;
      };
      alt?: string;
    };
  };
  publishedAt?: string;
  categories?: Array<{
    _id: string;
    title: string;
  }>;
  estimatedReadingTime?: number;
  body?: any[];
}

async function getPost(slug: string): Promise<SanityBlogPost | null> {
  try {
    const post = await client.fetch(postBySlugQuery, { slug });
    return post || null;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  const formattedDate = post.publishedAt 
    ? new Date(post.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    : null;

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-gray-800/50 bg-gray-950/50 backdrop-blur-sm">
        <div className="container px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/blog" className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            <Link href="/" className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              SERP Strategist
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative z-10 pt-16 pb-8">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            {/* Categories */}
            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {post.categories.map((category) => (
                  <Badge 
                    key={category._id}
                    variant="outline" 
                    className="bg-purple-900/20 text-purple-300 border-purple-500/30"
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

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
              {post.author && (
                <div className="flex items-center space-x-3">
                  {post.author.image ? (
                    <Image
                      src={urlFor(post.author.image).width(40).height(40).fit('crop').url()}
                      alt={post.author.name}
                      width={40}
                      height={40}
                      className="rounded-full border border-gray-700"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-sm text-white font-medium">
                      {post.author.name.charAt(0)}
                    </div>
                  )}
                  <span className="font-medium text-gray-300">{post.author.name}</span>
                </div>
              )}

              {formattedDate && (
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{formattedDate}</span>
                </div>
              )}

              {post.estimatedReadingTime && (
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{post.estimatedReadingTime} min read</span>
                </div>
              )}
            </div>

            {/* Excerpt */}
            {post.excerpt && (
              <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl">
                {post.excerpt}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Featured Image */}
      {post.mainImage && (
        <div className="relative z-10 mb-16">
          <div className="container px-4">
            <div className="max-w-5xl mx-auto">
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 z-10"></div>
                <Image
                  src={urlFor(post.mainImage).width(1200).height(675).fit('crop').url()}
                  alt={post.mainImage.alt || post.title}
                  width={1200}
                  height={675}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Article Content */}
      <article className="relative z-10 pb-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-invert max-w-none">
              {post.body && <PortableText value={post.body} components={components} />}
            </div>
          </div>
        </div>
      </article>

      {/* Author Bio */}
      {post.author && post.author.bio && (
        <section className="relative z-10 border-t border-gray-800/50 py-16">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8">
                <div className="flex items-start space-x-6">
                  {post.author.image ? (
                    <Image
                      src={urlFor(post.author.image).width(80).height(80).fit('crop').url()}
                      alt={post.author.name}
                      width={80}
                      height={80}
                      className="rounded-full border border-gray-700"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-xl text-white font-bold">
                      {post.author.name.charAt(0)}
                    </div>
                  )}
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">About {post.author.name}</h3>
                    <div className="prose prose-gray text-gray-300">
                      <PortableText value={post.author.bio} components={components} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Navigation */}
      <section className="relative z-10 border-t border-gray-800/50 py-8">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto flex justify-center">
            <Link href="/blog" passHref>
              <Button 
                variant="outline" 
                className="border-purple-500/30 text-purple-300 hover:bg-purple-900/20 hover:border-purple-500/50"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to All Posts
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}