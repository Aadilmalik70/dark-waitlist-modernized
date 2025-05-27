import { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Skeleton } from '../../components/ui/skeleton';
import { Badge } from '../../components/ui/badge';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage?: string;
  author: {
    name: string;
    avatar?: string;
  };
  publishedAt: string;
  categories?: string[];
  tags?: string[];
  seo: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
}

interface SinglePostPageProps {
  initialPost?: BlogPost;
}

export default function SinglePostPage({ initialPost }: SinglePostPageProps) {
  const router = useRouter();
  const { slug } = router.query;
  
  const [post, setPost] = useState<BlogPost | null>(initialPost || null);
  const [loading, setLoading] = useState(!initialPost);

  useEffect(() => {
    if (!initialPost && slug) {
      fetchPost();
    }
  }, [initialPost, slug]);

  const fetchPost = async () => {
    try {
      setLoading(true);
      // In a real implementation, this would fetch by slug
      // For demo purposes, we're using a placeholder approach
      const response = await fetch(`/api/blog/posts/${slug}`);
      const data = await response.json();
      setPost(data);
    } catch (error) {
      console.error('Error fetching blog post:', error);
    } finally {
      setLoading(false);
    }
  };

  const formattedDate = post?.publishedAt 
    ? new Date(post.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    : null;

  return (
    <>
      <Head>
        <title>{post?.seo?.title || post?.title || 'Blog Post'} | Dark Waitlist</title>
        <meta 
          name="description" 
          content={post?.seo?.description || post?.excerpt || 'Read our latest blog post'} 
        />
        {post?.seo?.keywords && (
          <meta name="keywords" content={Array.isArray(post.seo.keywords) ? post.seo.keywords.join(', ') : post.seo.keywords} />
        )}
      </Head>

      <div className="container py-12">
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>

        {loading ? (
          <div className="space-y-6">
            <Skeleton className="h-12 w-3/4" />
            <div className="flex items-center space-x-4">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-6 w-32" />
            </div>
            <Skeleton className="h-[300px] w-full" />
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        ) : post ? (
          <article className="max-w-3xl mx-auto">
            <header className="mb-8">
              <h1 className="text-4xl font-bold tracking-tight mb-4">{post.title}</h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center">
                  <User className="mr-1 h-4 w-4" />
                  <span>{post.author.name}</span>
                </div>
                
                {formattedDate && (
                  <div className="flex items-center">
                    <Calendar className="mr-1 h-4 w-4" />
                    <span>{formattedDate}</span>
                  </div>
                )}
                
                {post.categories && post.categories.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.categories.map((category, index) => (
                      <Badge key={index} variant="secondary">{category}</Badge>
                    ))}
                  </div>
                )}
              </div>
              
              {post.featuredImage && (
                <div className="aspect-video w-full overflow-hidden rounded-lg mb-8">
                  <img 
                    src={post.featuredImage} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </header>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
            
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 pt-6 border-t">
                <h3 className="text-lg font-medium mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <Badge key={index} variant="outline">{tag}</Badge>
                  ))}
                </div>
              </div>
            )}
          </article>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium">Post not found</h3>
            <p className="text-muted-foreground mt-1">The requested blog post could not be found</p>
            <Button asChild className="mt-4">
              <Link href="/blog">
                Return to Blog
              </Link>
            </Button>
          </div>
        )}
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    // In a real implementation, this would fetch from the API
    // For now, we'll let client-side fetching handle it
    return {
      props: {
        initialPost: null
      }
    };
  } catch (error) {
    console.error('Error in getServerSideProps:', error);
    return {
      props: {
        initialPost: null
      }
    };
  }
};
