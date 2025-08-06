import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';
import { Calendar, Eye, Clock } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { urlFor } from '../../lib/sanity';
import Image from 'next/image';

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
}

interface SanityBlogPostCardProps {
  post: SanityBlogPost;
}

const SanityBlogPostCard: React.FC<SanityBlogPostCardProps> = ({ post }) => {
  const formattedDate = post.publishedAt 
    ? new Date(post.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="h-full flex flex-col overflow-hidden transition-all hover:shadow-md hover:shadow-purple-900/10 hover:border-purple-500/30 border-gray-800 bg-gray-900/50 backdrop-blur-sm">
        <Link href={`/blog/${post.slug.current}`} className="flex flex-col h-full group">
          {post.mainImage && (
            <div className="aspect-video w-full overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-blue-900/30 opacity-60 group-hover:opacity-40 transition-opacity z-10"></div>
              <Image
                src={urlFor(post.mainImage).width(600).height(400).fit('crop').url()}
                alt={post.mainImage.alt || post.title}
                width={600}
                height={400}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          )}
          
          <CardHeader className="flex-grow">
            <div className="flex flex-wrap gap-2 mb-3">
              {post.categories && post.categories.map((category) => (
                <Badge 
                  key={category._id} 
                  variant="outline" 
                  className="bg-purple-900/20 text-purple-300 border-purple-500/30 hover:bg-purple-900/30"
                >
                  {category.title}
                </Badge>
              ))}
            </div>
            
            <h3 className="text-xl font-bold leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all">
              {post.title}
            </h3>
            
            {formattedDate && (
              <div className="flex items-center text-sm text-gray-400 mt-2">
                <Calendar className="mr-1 h-3 w-3" />
                <span>{formattedDate}</span>
                {post.estimatedReadingTime && (
                  <>
                    <span className="mx-2">•</span>
                    <Clock className="mr-1 h-3 w-3" />
                    <span>{post.estimatedReadingTime} min read</span>
                  </>
                )}
              </div>
            )}
          </CardHeader>
          
          <CardContent className="flex-grow-0">
            <p className="text-gray-400 line-clamp-3">{post.excerpt}</p>
          </CardContent>
          
          <CardFooter className="flex justify-between items-center pt-4 border-t border-gray-800">
            <div className="flex items-center space-x-2">
              {post.author?.image ? (
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-sm opacity-50"></div>
                  <Image
                    src={urlFor(post.author.image).width(32).height(32).fit('crop').url()}
                    alt={post.author.name}
                    width={32}
                    height={32}
                    className="relative h-8 w-8 rounded-full border border-gray-700"
                  />
                </div>
              ) : (
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-xs text-white font-medium">
                  {post.author?.name?.charAt(0) || 'A'}
                </div>
              )}
              <span className="text-sm font-medium text-gray-300">
                {post.author?.name || 'Anonymous'}
              </span>
            </div>
          </CardFooter>
        </Link>
      </Card>
    </motion.div>
  );
};

export default SanityBlogPostCard;