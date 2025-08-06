import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { BlogPostCard } from './BlogPostCard';
import { 
  BookOpen, 
  Rss,
  Sparkles,
  TrendingUp
} from 'lucide-react';

interface BlogPost {
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
  readTime?: number;
  views?: number;
}

interface EmptyStateProps {
  samplePosts: BlogPost[];
}

export const EmptyState = ({ samplePosts }: EmptyStateProps) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="text-center py-20 max-w-2xl mx-auto"
  >
    <div className="relative mb-8">
      <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-purple-500/20">
        <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
          <BookOpen className="w-10 h-10 text-white" />
        </div>
      </div>
      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
        <Sparkles className="w-4 h-4 text-white" />
      </div>
    </div>
    
    <h3 className="text-3xl font-bold text-white mb-4">
      Coming Soon: Amazing Content!
    </h3>
    <p className="text-xl text-gray-300 mb-8 leading-relaxed">
      We're crafting insightful articles to help you dominate search results. 
      Be the first to know when we publish new content.
    </p>
    
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-xl shadow-purple-900/25 hover:shadow-purple-900/40 transition-all duration-300 px-8 py-3 text-lg">
        <Rss className="mr-2 h-5 w-5" />
        Subscribe for Updates
      </Button>
      <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800/50 px-8 py-3">
        <TrendingUp className="mr-2 h-4 w-4" />
        Explore Sample Posts
      </Button>
    </div>
    
    {/* Sample posts showcase */}
    <div className="mt-16 space-y-8">
      <div className="flex items-center justify-center mb-8">
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent flex-1"></div>
        <span className="px-6 text-lg font-medium text-purple-400 bg-gray-950">
          Sample Posts Preview
        </span>
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent flex-1"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {samplePosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          >
            <BlogPostCard post={post} />
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);
