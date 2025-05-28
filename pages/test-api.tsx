import Head from 'next/head';
import { useState } from 'react';

export default function TestApiPage() {
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const testCreatePost = async () => {
        setLoading(true);
        try {
            const response = await fetch('/api/blog/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify({
                    title: 'Test Post - Simple',
                    excerpt: 'This is a test post to verify the API is working',
                    content: 'This is the content of the test post. It should work now!',
                    featuredImage: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800',
                    status: 'draft'

                }),
            });

            const data = await response.json();
            console.log('API Response:', data);
            setResult(data);
        } catch (error) {
            console.error('Error:', error);
            setResult({ error: error.message });
        } finally {
            setLoading(false);

        }
    };

    return (
        <>
            <Head>
                <title>API Test | SERP Strategist</title>
            </Head>

            <div className="min-h-screen bg-gray-950 text-white p-8">
            <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Blog API Test</h1 >

                <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 mb-8">
                    < h2 className ="text-xl font-bold mb-4">Test Post Creation</h2>
                        < p className ="text-gray-300 mb-6">
                  This will test creating a simple blog post with a URL image(no base64).
                </p >

        <button
            onClick={testCreatePost}
            disabled={loading}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 shadow-xl shadow-purple-900/25 disabled:opacity-50"
                >
                { loading? 'Testing...': 'Test Create Post' }
                </button >
              </div >

        { result && (
            <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8">
                < h3 className ="text-lg font-bold mb-4">Result:</h3>
                    < pre className ="bg-gray-800/50 p-4 rounded-lg overflow-auto text-sm">
    { JSON.stringify(result, null, 2) }
                  </pre >
                </div >
              )
}
            </div >
          </div >
        </>
      );
    }
