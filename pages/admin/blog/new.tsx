import { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import BlogPostForm from '../../../../components/blog/BlogPostForm';

export default function NewPostPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async (post) => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/blog/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...post,
          status: 'draft'
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to save post');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error saving post:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const handlePublish = async (post) => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/blog/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...post,
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

  return (
    <>
      <Head>
        <title>New Blog Post | Dark Waitlist</title>
        <meta name="description" content="Create a new blog post" />
      </Head>

      <div className="container py-12">
        <BlogPostForm 
          onSave={handleSave} 
          onPublish={handlePublish} 
        />
      </div>
    </>
  );
}
