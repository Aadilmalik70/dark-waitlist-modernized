import React, { useState, useCallback } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import RichTextEditor from './RichTextEditor';
import { Switch } from '../ui/switch';
import { 
  Upload, 
  Save, 
  Eye, 
  ArrowLeft, 
  Tags, 
  FileText, 
  Settings, 
  Calendar,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { motion } from 'framer-motion';

interface BlogPostFormProps {
  onSave: (post: any) => void;
  onPublish: (post: any) => void;
  initialData?: any;
}

const BlogPostForm: React.FC<BlogPostFormProps> = ({ 
  onSave, 
  onPublish, 
  initialData = {
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
  } 
}) => {
  const [post, setPost] = useState(initialData);
  const [activeTab, setActiveTab] = useState('content');
  const [isSaving, setIsSaving] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [autoSave, setAutoSave] = useState(true);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const [showPreview, setShowPreview] = useState(false);

  // Handle auto-save with debounce
  const debouncedSave = useCallback(() => {
    if (autoSave && post.title.trim()) {
      setSaveStatus('saving');
      
      // Simulate debounced save
      setTimeout(() => {
        onSave(post);
        setSaveStatus('saved');
        
        // Reset status after 3 seconds
        setTimeout(() => {
          setSaveStatus('idle');
        }, 3000);
      }, 1000);
    }
  }, [post, autoSave, onSave]);

  // Update post data
  const handleChange = (field: string, value: any) => {
    setPost(prev => {
      const updated = { ...prev, [field]: value };
      return updated;
    });
    
    // Trigger auto-save
    debouncedSave();
  };

  // Update nested SEO data
  const handleSeoChange = (field: string, value: string) => {
    setPost(prev => ({
      ...prev,
      seo: {
        ...prev.seo,
        [field]: value
      }
    }));
    
    // Trigger auto-save
    debouncedSave();
  };

  // Handle manual save
  const handleSave = async () => {
    setIsSaving(true);
    setSaveStatus('saving');
    try {
      await onSave(post);
      setSaveStatus('saved');
      setTimeout(() => setSaveStatus('idle'), 3000);
    } catch (error) {
      setSaveStatus('error');
    } finally {
      setIsSaving(false);
    }
  };

  // Handle publish
  const handlePublish = async () => {
    setIsPublishing(true);
    try {
      await onPublish(post);
    } finally {
      setIsPublishing(false);
    }
  };

  // Handle image upload
  const handleImageUpload = () => {
    // In a real implementation, this would open a file picker and upload the image
    const url = window.prompt('Enter image URL (in a real app, this would be a file upload):');
    if (url) {
      handleChange('featuredImage', url);
    }
  };

  return (
    <div className="relative">
      {/* Background elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="space-y-1">
            <Button variant="ghost" className="mb-2 -ml-4 text-gray-400 hover:text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Posts
            </Button>
            <h2 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              {post.title ? post.title : 'Create New Post'}
            </h2>
            <p className="text-gray-400">
              {saveStatus === 'saving' && 'Saving changes...'}
              {saveStatus === 'saved' && 'All changes saved'}
              {saveStatus === 'error' && 'Error saving changes'}
              {saveStatus === 'idle' && 'Create and edit your blog post content'}
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Switch 
                id="auto-save" 
                checked={autoSave} 
                onCheckedChange={setAutoSave} 
              />
              <Label htmlFor="auto-save" className="text-gray-300">Auto-save</Label>
            </div>
            
            <Button 
              variant="outline" 
              className="border-gray-700 hover:border-purple-500 transition-colors"
              onClick={() => setShowPreview(!showPreview)}
            >
              <Eye className="mr-2 h-4 w-4" />
              {showPreview ? 'Hide Preview' : 'Preview'}
            </Button>
          </div>
        </div>

        <div className="grid gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6"
          >
            <div className="grid gap-4">
              <div>
                <Label htmlFor="title" className="text-gray-300 mb-1.5 block">Post Title</Label>
                <Input
                  id="title"
                  value={post.title}
                  onChange={(e) => handleChange('title', e.target.value)}
                  placeholder="Enter an engaging title..."
                  className="bg-gray-800/50 border-gray-700 focus:border-purple-500 text-white"
                />
              </div>

              <div>
                <Label htmlFor="excerpt" className="text-gray-300 mb-1.5 block">Excerpt</Label>
                <Textarea
                  id="excerpt"
                  value={post.excerpt}
                  onChange={(e) => handleChange('excerpt', e.target.value)}
                  placeholder="Write a compelling summary of your post..."
                  className="bg-gray-800/50 border-gray-700 focus:border-purple-500 text-white resize-none"
                  rows={2}
                />
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden"
            >
              <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1">
                <TabsList className="w-full bg-gray-800/50 p-0 h-auto">
                  <TabsTrigger 
                    value="content" 
                    className="flex-1 py-3 data-[state=active]:bg-gray-900/50 data-[state=active]:text-purple-400 rounded-none border-b-2 border-transparent data-[state=active]:border-purple-500"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Content
                  </TabsTrigger>
                  <TabsTrigger 
                    value="seo" 
                    className="flex-1 py-3 data-[state=active]:bg-gray-900/50 data-[state=active]:text-purple-400 rounded-none border-b-2 border-transparent data-[state=active]:border-purple-500"
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    SEO
                  </TabsTrigger>
                  <TabsTrigger 
                    value="metadata" 
                    className="flex-1 py-3 data-[state=active]:bg-gray-900/50 data-[state=active]:text-purple-400 rounded-none border-b-2 border-transparent data-[state=active]:border-purple-500"
                  >
                    <Tags className="h-4 w-4 mr-2" />
                    Tags & Categories
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="content" className="p-6 m-0">
                  <RichTextEditor 
                    content={post.content} 
                    onChange={(content) => handleChange('content', content)} 
                  />
                </TabsContent>
                
                <TabsContent value="seo" className="p-6 m-0 space-y-6">
                  <div>
                    <Label htmlFor="seo-title" className="text-gray-300 mb-1.5 block">SEO Title</Label>
                    <Input
                      id="seo-title"
                      value={post.seo.title}
                      onChange={(e) => handleSeoChange('title', e.target.value)}
                      placeholder="SEO optimized title (optional)"
                      className="bg-gray-800/50 border-gray-700 focus:border-purple-500 text-white"
                    />
                    <p className="text-gray-500 text-sm mt-1">
                      {post.seo.title ? post.seo.title.length : 0}/60 characters (recommended)
                    </p>
                  </div>
                  
                  <div>
                    <Label htmlFor="seo-description" className="text-gray-300 mb-1.5 block">Meta Description</Label>
                    <Textarea
                      id="seo-description"
                      value={post.seo.description}
                      onChange={(e) => handleSeoChange('description', e.target.value)}
                      placeholder="Brief description for search engines"
                      className="bg-gray-800/50 border-gray-700 focus:border-purple-500 text-white resize-none"
                      rows={3}
                    />
                    <p className="text-gray-500 text-sm mt-1">
                      {post.seo.description ? post.seo.description.length : 0}/160 characters (recommended)
                    </p>
                  </div>
                  
                  <div>
                    <Label htmlFor="seo-keywords" className="text-gray-300 mb-1.5 block">Keywords</Label>
                    <Input
                      id="seo-keywords"
                      value={post.seo.keywords}
                      onChange={(e) => handleSeoChange('keywords', e.target.value)}
                      placeholder="Comma-separated keywords"
                      className="bg-gray-800/50 border-gray-700 focus:border-purple-500 text-white"
                    />
                  </div>
                </TabsContent>
                
                <TabsContent value="metadata" className="p-6 m-0 space-y-6">
                  <div>
                    <Label htmlFor="categories" className="text-gray-300 mb-1.5 block">Categories</Label>
                    <Input
                      id="categories"
                      value={post.categories.join(', ')}
                      onChange={(e) => handleChange('categories', e.target.value.split(',').map(cat => cat.trim()))}
                      placeholder="Add categories separated by commas"
                      className="bg-gray-800/50 border-gray-700 focus:border-purple-500 text-white"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="tags" className="text-gray-300 mb-1.5 block">Tags</Label>
                    <Input
                      id="tags"
                      value={post.tags.join(', ')}
                      onChange={(e) => handleChange('tags', e.target.value.split(',').map(tag => tag.trim()))}
                      placeholder="Add tags separated by commas"
                      className="bg-gray-800/50 border-gray-700 focus:border-purple-500 text-white"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="publishDate" className="text-gray-300 mb-1.5 block">Publish Date</Label>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                      <Input
                        id="publishDate"
                        type="date"
                        className="bg-gray-800/50 border-gray-700 focus:border-purple-500 text-white"
                      />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </motion.div>
            
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800 overflow-hidden">
                  <CardHeader className="bg-gray-800/50 pb-3">
                    <CardTitle className="text-lg flex items-center">
                      <Upload className="h-4 w-4 mr-2 text-purple-400" />
                      Featured Image
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    {post.featuredImage ? (
                      <div className="relative aspect-video overflow-hidden rounded-md">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-blue-900/30 opacity-60 z-10"></div>
                        <img 
                          src={post.featuredImage} 
                          alt="Featured" 
                          className="object-cover w-full h-full"
                        />
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="absolute bottom-2 right-2 z-20 bg-gray-900/70 border-gray-700 hover:bg-gray-800"
                          onClick={() => handleChange('featuredImage', '')}
                        >
                          Remove
                        </Button>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center aspect-video bg-gray-800/50 rounded-md border border-dashed border-gray-700 hover:border-purple-500 transition-colors cursor-pointer" onClick={handleImageUpload}>
                        <Upload className="h-8 w-8 text-gray-500 mb-2" />
                        <p className="text-sm text-gray-400">Click to upload image</p>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="border-t border-gray-800 pt-4">
                    <Button 
                      variant="outline" 
                      className="w-full border-gray-700 hover:border-purple-500 transition-colors" 
                      onClick={handleImageUpload}
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      {post.featuredImage ? 'Change Image' : 'Upload Image'}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800">
                  <CardHeader className="bg-gray-800/50 pb-3">
                    <CardTitle className="text-lg">Publishing</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Status:</span>
                      <Badge className="bg-gray-700 text-gray-300">Draft</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Visibility:</span>
                      <Badge className="bg-gray-700 text-gray-300">Public</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t border-gray-800 pt-4 flex flex-col gap-3">
                    <div className="grid grid-cols-2 gap-3 w-full">
                      <Button 
                        variant="outline" 
                        className="w-full border-gray-700 hover:border-purple-500 transition-colors" 
                        onClick={handleSave}
                        disabled={isSaving}
                      >
                        <Save className="h-4 w-4 mr-2" />
                        {isSaving ? 'Saving...' : 'Save Draft'}
                      </Button>
                      
                      <Button 
                        variant="default" 
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg shadow-purple-900/20 hover:shadow-purple-900/40 transition-all"
                        onClick={handlePublish}
                        disabled={isPublishing || !post.title.trim()}
                      >
                        {isPublishing ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span>Publishing...</span>
                          </>
                        ) : (
                          <>
                            <Eye className="h-4 w-4 mr-2" />
                            Publish
                          </>
                        )}
                      </Button>
                    </div>
                    
                    {saveStatus === 'saved' && (
                      <div className="flex items-center justify-center text-sm text-green-400 mt-2">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        <span>Changes saved successfully</span>
                      </div>
                    )}
                    
                    {saveStatus === 'error' && (
                      <div className="flex items-center justify-center text-sm text-red-400 mt-2">
                        <AlertCircle className="h-3 w-3 mr-1" />
                        <span>Error saving changes</span>
                      </div>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            </div>
          </div>
          
          {showPreview && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Eye className="h-4 w-4 mr-2 text-purple-400" />
                Preview
              </h3>
              
              <div className="bg-gray-800/50 rounded-lg p-6">
                <h1 className="text-2xl font-bold mb-4">{post.title || 'Post Title'}</h1>
                
                {post.featuredImage && (
                  <div className="aspect-video w-full overflow-hidden rounded-lg mb-6">
                    <img 
                      src={post.featuredImage} 
                      alt={post.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                <div className="prose prose-invert max-w-none">
                  {post.content ? (
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                  ) : (
                    <p className="text-gray-400">No content to preview</p>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPostForm;
