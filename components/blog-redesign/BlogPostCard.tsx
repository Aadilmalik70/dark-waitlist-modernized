import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';
import { Calendar, Eye, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface BlogPostCardProps {
  post: {
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
    readTime?: string;
    commentCount?: number;
    viewCount?: number;
  };
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
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
        <Link href={`/blog/${post.slug}`} className="flex flex-col h-full group">
          {post.featuredImage && (
            <div className="aspect-video w-full overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-blue-900/30 opacity-60 group-hover:opacity-40 transition-opacity z-10"></div>
              <img 
                src={post.featuredImage} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          )}
          
          <CardHeader className="flex-grow">
            <div className="flex flex-wrap gap-2 mb-3">
              {post.categories && post.categories.map((category, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="bg-purple-900/20 text-purple-300 border-purple-500/30 hover:bg-purple-900/30"
                >
                  {category}
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
                {post.readTime && (
                  <>
                    <span className="mx-2">•</span>
                    <span>{post.readTime} read</span>
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
              {post.author.avatar ? (
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-sm opacity-50"></div>
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name} 
                    className="relative h-8 w-8 rounded-full border border-gray-700"
                  />
                </div>
              ) : (
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-xs text-white font-medium">
                  {post.author.name.charAt(0)}
                </div>
              )}
              <span className="text-sm font-medium text-gray-300">{post.author.name}</span>
            </div>
            
            <div className="flex items-center space-x-4 text-gray-400 text-sm">
              {post.viewCount !== undefined && (
                <div className="flex items-center">
                  <Eye className="h-3 w-3 mr-1" />
                  <span>{post.viewCount}</span>
                </div>
              )}
              
              {post.commentCount !== undefined && (
                <div className="flex items-center">
                  <MessageCircle className="h-3 w-3 mr-1" />
                  <span>{post.commentCount}</span>
                </div>
              )}
            </div>
          </CardFooter>
        </Link>
      </Card>
    </motion.div>
  );
};

export default BlogPostCard;
