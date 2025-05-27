import React, { useState, useCallback } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import RichTextEditor from './RichTextEditor';
import { Switch } from '../ui/switch';
import { Upload, Save, Eye } from 'lucide-react';

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

  // Handle auto-save with debounce
  const debouncedSave = useCallback(() => {
    if (autoSave) {
      // In a real implementation, this would be debounced
      onSave(post);
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
    try {
      await onSave(post);
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
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold tracking-tight">Blog Post Editor</h2>
          <p className="text-muted-foreground">
            Create and edit your blog post content
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Switch 
            id="auto-save" 
            checked={autoSave} 
            onCheckedChange={setAutoSave} 
          />
          <Label htmlFor="auto-save">Auto-save</Label>
        </div>
      </div>

      <div className="grid gap-4">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={post.title}
            onChange={(e) => handleChange('title', e.target.value)}
            placeholder="Enter post title"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="excerpt">Excerpt</Label>
          <Textarea
            id="excerpt"
            value={post.excerpt}
            onChange={(e) => handleChange('excerpt', e.target.value)}
            placeholder="Brief summary of your post"
            className="mt-1 resize-none"
            rows={2}
          />
        </div>

        <div className="grid grid-cols-[1fr_250px] gap-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="content">Content</TabsTrigger>
              <TabsTrigger value="seo">SEO</TabsTrigger>
              <TabsTrigger value="preview">Preview</TabsTrigger>
            </TabsList>
            
            <TabsContent value="content" className="mt-4">
              <RichTextEditor 
                content={post.content} 
                onChange={(content) => handleChange('content', content)} 
              />
            </TabsContent>
            
            <TabsContent value="seo" className="mt-4 space-y-4">
              <div>
                <Label htmlFor="seo-title">SEO Title</Label>
                <Input
                  id="seo-title"
                  value={post.seo.title}
                  onChange={(e) => handleSeoChange('title', e.target.value)}
                  placeholder="SEO optimized title (optional)"
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="seo-description">Meta Description</Label>
                <Textarea
                  id="seo-description"
                  value={post.seo.description}
                  onChange={(e) => handleSeoChange('description', e.target.value)}
                  placeholder="Brief description for search engines"
                  className="mt-1 resize-none"
                  rows={3}
                />
              </div>
              
              <div>
                <Label htmlFor="seo-keywords">Keywords</Label>
                <Input
                  id="seo-keywords"
                  value={post.seo.keywords}
                  onChange={(e) => handleSeoChange('keywords', e.target.value)}
                  placeholder="Comma-separated keywords"
                  className="mt-1"
                />
              </div>
            </TabsContent>
            
            <TabsContent value="preview" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>{post.title || 'Post Title'}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose dark:prose-invert max-w-none">
                    {post.content ? (
                      <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    ) : (
                      <p className="text-muted-foreground">No content to preview</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Featured Image</CardTitle>
              </CardHeader>
              <CardContent>
                {post.featuredImage ? (
                  <div className="relative aspect-video overflow-hidden rounded-md">
                    <img 
                      src={post.featuredImage} 
                      alt="Featured" 
                      className="object-cover w-full h-full"
                    />
                  </div>
                ) : (
                  <div className="flex items-center justify-center aspect-video bg-muted rounded-md">
                    <p className="text-sm text-muted-foreground">No image selected</p>
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Button 
                  variant="outline" 
                  className="w-full" 
                  onClick={handleImageUpload}
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Image
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Publishing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  <Button 
                    variant="outline" 
                    className="w-full" 
                    onClick={handleSave}
                    disabled={isSaving}
                  >
                    <Save className="h-4 w-4 mr-2" />
                    {isSaving ? 'Saving...' : 'Save Draft'}
                  </Button>
                  
                  <Button 
                    variant="default" 
                    className="w-full" 
                    onClick={handlePublish}
                    disabled={isPublishing}
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    {isPublishing ? 'Publishing...' : 'Publish'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostForm;
