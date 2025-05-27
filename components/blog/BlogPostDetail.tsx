import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Calendar, Clock, User, MessageCircle, Tag } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface BlogPostDetailProps {
  post: {
    title: string;
    content: string;
    featuredImage?: string;
    author: {
      name: string;
      avatar?: string;
      bio?: string;
    };
    publishedAt: string;
    readTime?: string;
    categories?: string[];
    tags?: string[];
    commentCount?: number;
  };
}

const BlogPostDetail: React.FC<BlogPostDetailProps> = ({ post }) => {
  const formattedDate = post.publishedAt 
    ? new Date(post.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    : null;

  return (
    <article className="max-w-4xl mx-auto">
      {/* Background elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <header className="mb-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
          >
            {post.title}
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap gap-3 mb-6"
          >
            {post.categories && post.categories.map((category, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="bg-purple-900/20 text-purple-300 border-purple-500/30 hover:bg-purple-900/30"
              >
                {category}
              </Badge>
            ))}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-8"
          >
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2 text-purple-400" />
              <span>{formattedDate}</span>
            </div>
            
            {post.readTime && (
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-purple-400" />
                <span>{post.readTime} read</span>
              </div>
            )}
            
            {post.commentCount !== undefined && (
              <div className="flex items-center">
                <MessageCircle className="h-4 w-4 mr-2 text-purple-400" />
                <span>{post.commentCount} comments</span>
              </div>
            )}
          </motion.div>
          
          {post.featuredImage && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative aspect-video w-full overflow-hidden rounded-xl mb-10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-blue-900/30 opacity-60 z-10"></div>
              <img 
                src={post.featuredImage} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </motion.div>
          )}
        </header>
        
        {/* Content */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="prose prose-invert prose-lg max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-3">
              <Tag className="h-5 w-5 text-purple-400" />
              <h3 className="text-lg font-medium text-gray-300">Tags</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="border-gray-700 text-gray-400 hover:border-purple-500 hover:text-purple-400 transition-colors"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </motion.div>
        )}
        
        {/* Author */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800 overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                {post.author.avatar ? (
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-sm opacity-50"></div>
                    <img 
                      src={post.author.avatar} 
                      alt={post.author.name} 
                      className="relative h-16 w-16 rounded-full border border-gray-700"
                    />
                  </div>
                ) : (
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-sm opacity-50"></div>
                    <div className="relative h-16 w-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-xl text-white font-medium">
                      {post.author.name.charAt(0)}
                    </div>
                  </div>
                )}
                
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <User className="h-4 w-4 text-purple-400" />
                    <h3 className="font-medium text-lg text-gray-200">{post.author.name}</h3>
                  </div>
                  
                  {post.author.bio && (
                    <p className="text-gray-400">{post.author.bio}</p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </article>
  );
};

export default BlogPostDetail;
