import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';
import { Calendar } from 'lucide-react';
import Link from 'next/link';

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
    <Card className="h-full flex flex-col overflow-hidden transition-all hover:shadow-md">
      <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
        {post.featuredImage && (
          <div className="aspect-video w-full overflow-hidden">
            <img 
              src={post.featuredImage} 
              alt={post.title} 
              className="w-full h-full object-cover transition-transform hover:scale-105"
            />
          </div>
        )}
        
        <CardHeader className="flex-grow">
          <div className="space-y-1">
            <h3 className="text-xl font-bold leading-tight">{post.title}</h3>
            {formattedDate && (
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="mr-1 h-3 w-3" />
                <span>{formattedDate}</span>
              </div>
            )}
          </div>
        </CardHeader>
        
        <CardContent className="flex-grow-0">
          <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
        </CardContent>
        
        <CardFooter className="flex justify-between items-center pt-4">
          <div className="flex items-center space-x-2">
            {post.author.avatar ? (
              <img 
                src={post.author.avatar} 
                alt={post.author.name} 
                className="h-6 w-6 rounded-full"
              />
            ) : (
              <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-xs text-primary font-medium">
                {post.author.name.charAt(0)}
              </div>
            )}
            <span className="text-sm font-medium">{post.author.name}</span>
          </div>
          
          {post.categories && post.categories.length > 0 && (
            <Badge variant="outline">{post.categories[0]}</Badge>
          )}
        </CardFooter>
      </Link>
    </Card>
  );
};

export default BlogPostCard;
