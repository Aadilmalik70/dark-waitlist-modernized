import Link from 'next/link';
import { Button } from '../ui/button';
import { PlusCircle } from 'lucide-react';

interface BlogHeaderProps {
  isAdmin?: boolean;
}

const BlogHeader: React.FC<BlogHeaderProps> = ({ isAdmin = false }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
        <p className="text-muted-foreground mt-1">
          Latest news, updates, and insights
        </p>
      </div>
      
      {isAdmin && (
        <Button asChild>
          <Link href="/admin/blog/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            New Post
          </Link>
        </Button>
      )}
    </div>
  );
};

export default BlogHeader;
