import Link from 'next/link';
import { Badge } from '../ui/badge';
import { Clock, Eye, ArrowRight } from 'lucide-react';
import { urlFor } from '../../lib/sanity';

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  mainImage?: {
    asset: any;
    alt?: string;
  };
  author: {
    name: string;
    image?: {
      asset: any;
      alt?: string;
    };
  };
  publishedAt: string;
  categories?: Array<{
    title: string;
    color: string;
  }>;
  readingTime?: number;
  featured?: boolean;
}

interface BlogPostCardProps {
  post: BlogPost;
}

export const BlogPostCard = ({ post }: BlogPostCardProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const imageUrl = post.mainImage ? urlFor(post.mainImage.asset).width(800).height(400).url() : null;
  const authorAvatar = post.author.image ? urlFor(post.author.image.asset).width(64).height(64).url() : null;

  return (
    <Link href={`/blog/${post.slug.current}`}>
      <div className="group relative overflow-hidden bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl hover:border-purple-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-900/20 cursor-pointer">
        {/* Featured Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-blue-600/20 z-10"></div>
          {imageUrl ? (
            <img 
              src={imageUrl} 
              alt={post.mainImage?.alt || post.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center">
              <span className="text-white/60 text-sm font-medium">No Image</span>
            </div>
          )}
          <div className="absolute top-4 left-4 z-20 flex gap-2">
            {post.categories?.slice(0, 2).map((category) => (
              <Badge 
                key={category.title} 
                className="bg-black/40 backdrop-blur-sm text-white border-white/20 hover:bg-black/60 transition-colors"
              >
                {category.title}
              </Badge>
            ))}
          </div>
          {post.readingTime && (
            <div className="absolute bottom-4 right-4 z-20 flex items-center gap-3 text-white/80 text-sm">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{post.readingTime}m read</span>
              </div>
            </div>
          )}
        </div>
        
        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-3 text-sm text-gray-400">
            {authorAvatar ? (
              <img 
                src={authorAvatar} 
                alt={post.author.name}
                className="w-8 h-8 rounded-full ring-2 ring-purple-500/20"
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center ring-2 ring-purple-500/20">
                <span className="text-white text-xs font-bold">
                  {post.author.name.charAt(0).toUpperCase()}
                </span>
              </div>
            )}
            <span className="font-medium text-gray-300">{post.author.name}</span>
            <span>•</span>
            <span>{formatDate(post.publishedAt)}</span>
          </div>
          
          <h3 className="text-xl font-bold text-white leading-tight group-hover:text-purple-300 transition-colors line-clamp-2">
            {post.title}
          </h3>
          
          <p className="text-gray-400 leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center text-purple-400 font-medium group-hover:text-purple-300 transition-colors">
              <span className="text-sm">Read More</span>
              <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
