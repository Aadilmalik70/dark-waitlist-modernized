import Link from 'next/link';
import { Button } from '../ui/button';
import { PlusCircle, RssIcon } from 'lucide-react';

interface BlogHeaderProps {
  isAdmin?: boolean;
}

const BlogHeader: React.FC<BlogHeaderProps> = ({ isAdmin = false }) => {
  return (
    <div className="relative py-12 mb-12 overflow-hidden">
      {/* Background gradient and decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-950/30 to-blue-950/30 z-0"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/5 w-2 h-2 rounded-full bg-purple-500 opacity-30 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-blue-500 opacity-20 animate-pulse" style={{ animationDelay: "0.7s" }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-cyan-500 opacity-30 animate-pulse" style={{ animationDelay: "1.2s" }}></div>
      </div>
      
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6 max-w-5xl mx-auto px-4">
        <div className="text-center md:text-left">
          <div className="inline-flex items-center justify-center p-2 bg-purple-900/30 backdrop-blur-sm rounded-full mb-4">
            <span className="px-3 py-1 text-purple-300 text-sm font-medium">Our Blog</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Insights & Updates
          </h1>
          <p className="text-gray-300 text-lg max-w-xl">
            Latest news, strategies, and insights to help you create content that dominates search results
          </p>
        </div>
        
        <div className="flex gap-4">
          {isAdmin && (
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg shadow-purple-900/20 hover:shadow-purple-900/40 transition-all">
              <Link href="/admin/blog/new" className="flex items-center">
                <PlusCircle className="mr-2 h-4 w-4" />
                New Post
              </Link>
            </Button>
          )}
          
          <Button variant="outline" className="border-gray-700 hover:border-purple-500 transition-colors">
            <Link href="/rss" className="flex items-center">
              <RssIcon className="mr-2 h-4 w-4" />
              Subscribe
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
