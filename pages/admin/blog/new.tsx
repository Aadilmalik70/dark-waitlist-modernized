import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Textarea } from '../../../components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import { 
  ArrowLeft, 
  Save, 
  Eye, 
  Upload, 
  CheckCircle,
  AlertCircle,
  Sparkles,
  Target,
  X,
  Type,
  Bold,
  Italic,
  List,
  Link2,
  Image
} from 'lucide-react';
import { motion } from 'framer-motion';

// Dynamically import ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import('react-quill-new'), {
  ssr: false,
  loading: () => (
    <div className="bg-gray-800/30 border-gray-700/50 rounded-xl min-h-[400px] flex items-center justify-center">
      <div className="text-gray-400">Loading editor...</div>
    </div>
  )
});

export default function NewPostPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const [editorLoaded, setEditorLoaded] = useState(false);
  
  const [post, setPost] = useState({
    title: '',
    excerpt: '',
    content: '',
    featuredImage: '',
    categories: [],
    tags: [],
    seo: {
      title: '',
      description: '',
      keywords: ''
    }
  });

  const [newCategory, setNewCategory] = useState('');
  const [newTag, setNewTag] = useState('');

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  // Quill editor configuration
  const quillModules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      ['blockquote', 'code-block'],
      ['link', 'image'],
      [{ 'align': [] }],
      ['clean']
    ],
    clipboard: {
      matchVisual: false,
    }
  };

  const quillFormats = [
    'header', 'bold', 'italic', 'underline', 'strike',
    'color', 'background', 'list', 'bullet', 'indent',
    'link', 'image', 'blockquote', 'code-block', 'align'
  ];

  const handleSave = async () => {
    try {
      setIsLoading(true);
      setSaveStatus('saving');
      
      console.log('Saving post with data:', {
        ...post,
        status: 'draft'
      });
      
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
        const errorData = await response.text();
        console.error('Server response error:', errorData);
        throw new Error(`Failed to save post: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      console.log('Post saved successfully:', result);
      setSaveStatus('saved');
      setTimeout(() => setSaveStatus('idle'), 3000);
    } catch (error) {
      console.error('Error saving post:', error);
      setSaveStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  const handlePublish = async () => {
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
    } catch (error) {
      console.error('Error publishing post:', error);
      setSaveStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (field: string, value: any) => {
    setPost(prev => ({ ...prev, [field]: value }));
  };

  const addCategory = () => {
    if (newCategory.trim() && !post.categories.includes(newCategory.trim())) {
      handleChange('categories', [...post.categories, newCategory.trim()]);
      setNewCategory('');
    }
  };

  const removeCategory = (category: string) => {
    handleChange('categories', post.categories.filter(c => c !== category));
  };

  const addTag = () => {
    if (newTag.trim() && !post.tags.includes(newTag.trim())) {
      handleChange('tags', [...post.tags, newTag.trim()]);
      setNewTag('');
    }
  };

  const removeTag = (tag: string) => {
    handleChange('tags', post.tags.filter(t => t !== tag));
  };

  // Calculate word count from HTML content
  const getWordCount = (htmlContent: string) => {
    const text = htmlContent.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ');
    return text.trim().split(/\s+/).filter(word => word.length > 0).length;
  };

  const wordCount = getWordCount(post.content);

  const completionScore = Math.min(100, 
    (post.title ? 25 : 0) + 
    (post.excerpt ? 15 : 0) + 
    (wordCount > 100 ? 25 : 0) + 
    (post.featuredImage ? 15 : 0) + 
    (post.categories.length > 0 ? 10 : 0) + 
    (post.seo.title ? 10 : 0)
  );

  return (
    <>
      <Head>
        <title>New Blog Post | SERP Strategist</title>
        <meta name="description" content="Create a new blog post" />
        <link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet" />
        <style jsx global>{`
          .ql-toolbar.ql-snow {
            border: 1px solid rgb(55 65 81 / 0.5) !important;
            border-bottom: none !important;
            background: rgb(31 41 55 / 0.3) !important;
            border-radius: 12px 12px 0 0 !important;
          }
          
          .ql-container.ql-snow {
            border: 1px solid rgb(55 65 81 / 0.5) !important;
            border-radius: 0 0 12px 12px !important;
            background: rgb(31 41 55 / 0.3) !important;
          }
          
          .ql-editor {
            color: white !important;
            font-size: 16px !important;
            line-height: 1.6 !important;
            min-height: 400px !important;
          }
          
          .ql-editor p {
            margin-bottom: 1em !important;
          }
          
          .ql-editor h1, .ql-editor h2, .ql-editor h3, .ql-editor h4, .ql-editor h5, .ql-editor h6 {
            color: rgb(196 181 253) !important;
            margin-top: 1.5em !important;
            margin-bottom: 0.5em !important;
          }
          
          .ql-editor blockquote {
            border-left: 4px solid rgb(147 51 234) !important;
            background: rgb(147 51 234 / 0.1) !important;
            padding: 1em !important;
            margin: 1em 0 !important;
            color: rgb(196 181 253) !important;
          }
          
          .ql-editor pre {
            background: rgb(17 24 39) !important;
            color: rgb(229 231 235) !important;
            border: 1px solid rgb(55 65 81) !important;
            border-radius: 8px !important;
            padding: 1em !important;
          }
          
          .ql-toolbar .ql-stroke {
            stroke: rgb(156 163 175) !important;
          }
          
          .ql-toolbar .ql-fill {
            fill: rgb(156 163 175) !important;
          }
          
          .ql-toolbar button:hover .ql-stroke {
            stroke: rgb(147 51 234) !important;
          }
          
          .ql-toolbar button:hover .ql-fill {
            fill: rgb(147 51 234) !important;
          }
          
          .ql-toolbar button.ql-active .ql-stroke {
            stroke: rgb(147 51 234) !important;
          }
          
          .ql-toolbar button.ql-active .ql-fill {
            fill: rgb(147 51 234) !important;
          }
          
          .ql-picker-label {
            color: rgb(156 163 175) !important;
          }
          
          .ql-picker-options {
            background: rgb(31 41 55) !important;
            border: 1px solid rgb(55 65 81) !important;
          }
          
          .ql-picker-item {
            color: rgb(156 163 175) !important;
          }
          
          .ql-picker-item:hover {
            color: rgb(147 51 234) !important;
          }
        `}</style>
      </Head>

      <div className="min-h-screen bg-gray-950 text-gray-100 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-900/8 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/8 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4"></div>
        </div>
        
        <div className="container px-6 py-8 relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8"
          >
            <div className="space-y-2">
              <Button variant="ghost" asChild className="mb-2 -ml-4 text-gray-400 hover:text-white">
                <Link href="/admin/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Posts
                </Link>
              </Button>
              <h1 className="text-4xl font-bold tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                  {post.title || 'Create New Post'}
                </span>
              </h1>
              <div className="flex items-center gap-4 text-sm">
                {saveStatus === 'saving' && (
                  <div className="flex items-center text-yellow-400">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse mr-2" />
                    Saving changes...
                  </div>
                )}
                {saveStatus === 'saved' && (
                  <div className="flex items-center text-green-400">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    All changes saved
                  </div>
                )}
                {saveStatus === 'error' && (
                  <div className="flex items-center text-red-400">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    Error saving changes
                  </div>
                )}
                {saveStatus === 'idle' && (
                  <span className="text-gray-400">
                    Create and edit your blog post content
                  </span>
                )}
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_400px] gap-8">
            {/* Left Column - Main Editor */}
            <div className="space-y-6">
              {/* Title and Excerpt */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6"
              >
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="title" className="text-gray-300 mb-2 block font-medium">
                      Post Title *
                    </Label>
                    <Input
                      id="title"
                      value={post.title}
                      onChange={(e) => handleChange('title', e.target.value)}
                      placeholder="Enter an engaging title that captures attention..."
                      className="bg-gray-800/50 border-gray-700/50 focus:border-purple-500/50 text-white text-lg h-12 rounded-xl"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      {post.title.length} characters • {post.title.length > 60 ? 'Consider shortening for better SEO' : 'Good length for SEO'}
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="excerpt" className="text-gray-300 mb-2 block font-medium">
                      Post Excerpt
                    </Label>
                    <Textarea
                      id="excerpt"
                      value={post.excerpt}
                      onChange={(e) => handleChange('excerpt', e.target.value)}
                      placeholder="Write a compelling summary that makes readers want to continue..."
                      className="bg-gray-800/50 border-gray-700/50 focus:border-purple-500/50 text-white resize-none rounded-xl"
                      rows={3}
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      {post.excerpt.length} characters • This appears in search results and social shares
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Rich Text Editor */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-6">
                    <Label className="text-gray-300 font-medium flex items-center">
                      <Type className="h-5 w-5 mr-2 text-purple-400" />
                      Post Content
                    </Label>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span>{wordCount} words</span>
                      <div className="flex items-center gap-2">
                        <Bold className="h-4 w-4" />
                        <Italic className="h-4 w-4" />
                        <List className="h-4 w-4" />
                        <Link2 className="h-4 w-4" />
                        <Image className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                  
                  {editorLoaded && (
                    <ReactQuill
                      theme="snow"
                      value={post.content}
                      onChange={(content) => handleChange('content', content)}
                      modules={quillModules}
                      formats={quillFormats}
                      placeholder="Start writing your amazing content here...

Use the toolbar above to format your text:
• Add headings to structure your content
• Use bold and italic for emphasis
• Create lists and blockquotes
• Add links and images
• Format code blocks for technical content

Write engaging, valuable content that your readers will love!"
                      style={{ 
                        minHeight: '400px'
                      }}
                    />
                  )}
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-800/50">
                    <div className="text-sm text-gray-400">
                      Minimum 100 words recommended for SEO
                    </div>
                    <div className={`text-sm ${wordCount > 100 ? 'text-green-400' : 'text-gray-400'}`}>
                      {wordCount > 100 ? '✓ Good length' : `${100 - wordCount} more words needed`}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Categories and Tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8"
              >
                <h3 className="text-lg font-medium text-white mb-6">Categories & Tags</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label className="text-gray-300 mb-3 block font-medium">Categories</Label>
                    <div className="space-y-3">
                      <div className="flex gap-2">
                        <Input
                          value={newCategory}
                          onChange={(e) => setNewCategory(e.target.value)}
                          placeholder="Add new category"
                          className="bg-gray-800/50 border-gray-700/50 focus:border-purple-500/50 text-white rounded-xl"
                          onKeyPress={(e) => e.key === 'Enter' && addCategory()}
                        />
                        <Button 
                          onClick={addCategory}
                          variant="outline"
                          className="border-gray-700 hover:border-purple-500 px-4 rounded-xl"
                        >
                          Add
                        </Button>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {post.categories.map((category) => (
                          <Badge 
                            key={category} 
                            variant="secondary"
                            className="bg-purple-500/20 text-purple-300 border-purple-500/30 hover:bg-purple-500/30 transition-colors"
                          >
                            {category}
                            <button
                              onClick={() => removeCategory(category)}
                              className="ml-2 hover:text-purple-100"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <Label className="text-gray-300 mb-3 block font-medium">Tags</Label>
                    <div className="space-y-3">
                      <div className="flex gap-2">
                        <Input
                          value={newTag}
                          onChange={(e) => setNewTag(e.target.value)}
                          placeholder="Add new tag"
                          className="bg-gray-800/50 border-gray-700/50 focus:border-purple-500/50 text-white rounded-xl"
                          onKeyPress={(e) => e.key === 'Enter' && addTag()}
                        />
                        <Button 
                          onClick={addTag}
                          variant="outline"
                          className="border-gray-700 hover:border-purple-500 px-4 rounded-xl"
                        >
                          Add
                        </Button>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <Badge 
                            key={tag} 
                            variant="outline"
                            className="border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-300 transition-colors"
                          >
                            {tag}
                            <button
                              onClick={() => removeTag(tag)}
                              className="ml-2 hover:text-gray-100"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Completion Score */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="bg-gray-900/40 backdrop-blur-sm border-gray-800/50 overflow-hidden">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg flex items-center justify-between">
                      <div className="flex items-center">
                        <Target className="h-5 w-5 mr-2 text-purple-400" />
                        Completion Score
                      </div>
                      <span className="text-2xl font-bold text-white">{completionScore}%</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="relative">
                      <div className="w-full bg-gray-800 rounded-full h-3">
                        <div 
                          className={`h-3 rounded-full bg-gradient-to-r ${completionScore >= 80 ? 'from-green-500 to-emerald-500' : completionScore >= 60 ? 'from-yellow-500 to-orange-500' : 'from-red-500 to-pink-500'} transition-all duration-300`}
                          style={{ width: `${completionScore}%` }}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Title</span>
                        {post.title.trim() ? (
                          <CheckCircle className="w-4 h-4 text-green-400" />
                        ) : (
                          <div className="w-4 h-4 rounded-full border-2 border-gray-600" />
                        )}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Content (100+ words)</span>
                        {wordCount > 100 ? (
                          <CheckCircle className="w-4 h-4 text-green-400" />
                        ) : (
                          <div className="w-4 h-4 rounded-full border-2 border-gray-600" />
                        )}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Featured Image</span>
                        {post.featuredImage ? (
                          <CheckCircle className="w-4 h-4 text-green-400" />
                        ) : (
                          <div className="w-4 h-4 rounded-full border-2 border-gray-600" />
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* Featured Image */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card className="bg-gray-900/40 backdrop-blur-sm border-gray-800/50 overflow-hidden">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Upload className="h-5 w-5 mr-2 text-purple-400" />
                      Featured Image
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {post.featuredImage ? (
                      <div className="relative aspect-video overflow-hidden rounded-xl">
                        <img 
                          src={post.featuredImage} 
                          alt="Featured" 
                          className="object-cover w-full h-full"
                        />
                        <Button 
                          variant="secondary" 
                          size="sm"
                          className="absolute bottom-3 right-3 bg-gray-900/80 hover:bg-gray-800 backdrop-blur-sm"
                          onClick={() => handleChange('featuredImage', '')}
                        >
                          <X className="w-4 h-4 mr-1" />
                          Remove
                        </Button>
                      </div>
                    ) : (
                      <div 
                        className="flex flex-col items-center justify-center aspect-video bg-gray-800/30 rounded-xl border-2 border-dashed border-gray-700 hover:border-purple-500/50 transition-colors cursor-pointer group"
                        onClick={() => {
                          const url = window.prompt('Enter image URL (or paste base64 data):');
                          if (url) {
                            // Validate URL format
                            if (url.startsWith('http') || url.startsWith('data:image/')) {
                              handleChange('featuredImage', url);
                            } else {
                              alert('Please enter a valid URL (starting with http) or base64 data (starting with data:image/)');
                            }
                          }
                        }}
                      >
                        <Upload className="h-12 w-12 text-gray-500 group-hover:text-purple-400 transition-colors mb-3" />
                        <p className="text-sm text-gray-400 group-hover:text-gray-300 text-center">
                          Click to add image<br />
                          <span className="text-xs">URL or base64 supported</span>
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* Publishing Actions */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Card className="bg-gray-900/40 backdrop-blur-sm border-gray-800/50">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center justify-between">
                      <span>Publishing</span>
                      <Badge variant="outline" className="border-gray-600 text-gray-400">
                        Draft
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Status:</span>
                      <span className="text-yellow-400">Draft</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Visibility:</span>
                      <span className="text-green-400">Public</span>
                    </div>
                    
                    {completionScore < 60 && (
                      <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3">
                        <div className="flex items-start gap-2">
                          <AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5" />
                          <div className="text-sm">
                            <p className="text-yellow-300 font-medium">Almost ready!</p>
                            <p className="text-yellow-200/80">Complete a few more sections to improve your post.</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                  <div className="p-6 pt-0">
                    <div className="grid grid-cols-2 gap-3">
                      <Button 
                        variant="outline" 
                        className="border-gray-700 hover:border-purple-500 transition-colors" 
                        onClick={handleSave}
                        disabled={isLoading}
                      >
                        <Save className="h-4 w-4 mr-2" />
                        {isLoading ? 'Saving...' : 'Save Draft'}
                      </Button>
                      
                      <Button 
                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-xl shadow-purple-900/25 hover:shadow-purple-900/40 transition-all duration-300"
                        onClick={handlePublish}
                        disabled={isLoading || !post.title.trim()}
                      >
                        <Sparkles className="h-4 w-4 mr-2" />
                        Publish
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}