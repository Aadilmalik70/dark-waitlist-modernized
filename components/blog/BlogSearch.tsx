import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { Input } from '../ui/input';

interface BlogSearchProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  resultsCount?: number;
}

export const BlogSearch = ({ 
  searchTerm, 
  onSearchChange, 
  resultsCount 
}: BlogSearchProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="max-w-4xl mx-auto mb-12"
    >
      <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
          <Input
            type="search"
            placeholder="Search articles..."
            className="pl-12 bg-gray-800/50 border-gray-700/50 focus:border-purple-500/50 text-white h-12 rounded-xl text-lg placeholder:text-gray-500"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
        
        {searchTerm && resultsCount !== undefined && (
          <div className="mt-4 pt-4 border-t border-gray-800/50">
            <p className="text-gray-400">
              {resultsCount} article{resultsCount !== 1 ? 's' : ''} found for "{searchTerm}"
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
};
