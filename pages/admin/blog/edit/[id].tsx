import { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import BlogPostForm from '../../../../components/blog/BlogPostForm';

export default function EditPostPage() {
  const router = useRouter();
  const { id } = router.query;
  
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      fetchPost();
    }
  }, [id]);

  const fetchPost = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/blog/posts/${id}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch post');
      }
      
      const data = await response.json();
      setPost(data);
    } catch (error) {
      console.error('Error fetching post:', error);
      setError('Failed to load post. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async (updatedPost) => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/blog/posts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedPost),
      });

      if (!response.ok) {
        throw new Error('Failed to update post');
      }

      const data = await response.json();
      setPost(data);
      return data;
    } catch (error) {
      console.error('Error updating post:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const handlePublish = async (updatedPost) => {
    try {
      setIsLoading(true);
      // First update the post
      await handleSave(updatedPost);
      
      // Then update the status
      const response = await fetch(`/api/blog/posts/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          status: 'published'
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to publish post');
      }

      const data = await response.json();
      router.push(`/blog/${data.slug}`);
      return data;
    } catch (error) {
      console.error('Error publishing post:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading && !post) {
    return (
      <div className="container py-12">
        <div className="flex items-center justify-center h-64">
          <p className="text-lg">Loading post...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-12">
        <div className="flex flex-col items-center justify-center h-64">
          <p className="text-lg text-red-500 mb-4">{error}</p>
          <button
            onClick={() => router.push('/admin/blog')}
            className="px-4 py-2 bg-primary text-white rounded-md"
          >
            Back to Blog Admin
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Edit Blog Post | Dark Waitlist</title>
        <meta name="description" content="Edit an existing blog post" />
      </Head>

      <div className="container py-12">
        {post ? (
          <BlogPostForm 
            initialData={post}
            onSave={handleSave} 
            onPublish={handlePublish} 
          />
        ) : (
          <div className="flex items-center justify-center h-64">
            <p className="text-lg">Post not found</p>
          </div>
        )}
      </div>
    </>
  );
}
