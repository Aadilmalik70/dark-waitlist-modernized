import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Rss } from 'lucide-react';

export const BlogHeader = () => {
  return (
    <header className="relative z-10 border-b border-gray-800/50 bg-gray-950/50 backdrop-blur-sm">
      <div className="container px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link 
            href="/" 
            className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
          >
            SERP Strategist Blog
          </Link>
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              className="border-gray-700 hover:border-purple-500 transition-colors"
            >
              <Rss className="w-4 h-4 mr-2" />
              Subscribe
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};
