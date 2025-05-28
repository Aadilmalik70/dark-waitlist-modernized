import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';
import { Switch } from '../ui/switch';
import { Progress } from '../ui/progress';
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
  AlertCircle,
  ImageIcon,
  X,
  Sparkles,
  Clock,
  Globe,
  Lock,
  Zap,
  Target,
  TrendingUp,
  BookOpen,
  Lightbulb
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
    },
    visibility: 'public',
    publishDate: ''
  } 
}) => {
  const [post, setPost] = useState(initialData);
  const [activeTab, setActiveTab] = useState('content');
  const [isSaving, setIsSaving] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [autoSave, setAutoSave] = useState(true);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const [showPreview, setShowPreview] = useState(false);
  const [completionScore, setCompletionScore] = useState(0);
  const [newCategory, setNewCategory] = useState('');
  const [newTag, setNewTag] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [readTime, setReadTime] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Calculate completion score
  useEffect(() => {
    let score = 0;
    const checks = [
      { condition: post.title.trim().length > 0, weight: 20 },
      { condition: post.excerpt.trim().length > 0, weight: 15 },
      { condition: post.content.trim().length > 100, weight: 25 },
      { condition: post.featuredImage.length > 0, weight: 15 },
      { condition: post.categories.length > 0, weight: 10 },
      { condition: post.seo.title.length > 0, weight: 10 },
      { condition: post.seo.description.length > 0, weight: 5 }
    ];
    
    score = checks.reduce((acc, check) => acc + (check.condition ? check.weight : 0), 0);
    setCompletionScore(score);
  }, [post]);

  // Calculate word count and read time
  useEffect(() => {
    const words = post.content.trim().split(/\s+/).filter(word => word.length > 0).length;
    setWordCount(words);
    setReadTime(Math.ceil(words / 200)); // Assuming 200 words per minute
  }, [post.content]);

  const debouncedSave = useCallback(() => {
    if (autoSave && post.title.trim()) {
      setSaveStatus('saving');
      
      setTimeout(() => {
        onSave(post);
        setSaveStatus('saved');
        
        setTimeout(() => {
          setSaveStatus('idle');
        }, 3000);
      }, 1000);
    }
  }, [post, autoSave, onSave]);

  const handleChange = (field: string, value: any) => {
    setPost(prev => {
      const updated = { ...prev, [field]: value };
      return updated;
    });
    debouncedSave();
  };

  const handleSeoChange = (field: string, value: string) => {
    setPost(prev => ({
      ...prev,
      seo: {
        ...prev.seo,
        [field]: value
      }
    }));
    debouncedSave();
  };

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

  const handlePublish = async () => {
    setIsPublishing(true);
    try {
      await onPublish(post);
    } finally {
      setIsPublishing(false);
    }
  };

  const handleImageUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // In a real implementation, this would upload the file
      const url = URL.createObjectURL(file);
      handleChange('featuredImage', url);
    }
  };

  const addCategory = () => {
    if (newCategory.trim() && !post.categories.includes(newCategory.trim())) {
      handleChange('categories', [...post.categories, newCategory.trim()]);
      setNewCategory('');
    }
  };

  const removeCategory = (category: string) => {
    handleChange('categories', post.categories.filter((c: string) => c !== category));
  };

  const addTag = () => {
    if (newTag.trim() && !post.tags.includes(newTag.trim())) {
      handleChange('tags', [...post.tags, newTag.trim()]);
      setNewTag('');
    }
  };

  const removeTag = (tag: string) => {
    handleChange('tags', post.tags.filter((t: string) => t !== tag));
  };

  const getCompletionColor = () => {
    if (completionScore >= 80) return 'from-green-500 to-emerald-500';
    if (completionScore >= 60) return 'from-yellow-500 to-orange-500';
    return 'from-red-500 to-pink-500';
  };

  const CompletionCard = () => (
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
          <Progress 
            value={completionScore} 
            className="h-3 bg-gray-800"
          />
          <div 
            className={`absolute inset-0 h-3 rounded-full bg-gradient-to-r ${getCompletionColor()} opacity-80`}
            style={{ width: `${completionScore}%` }}
          />
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
            {post.content.trim().length > 100 ? (
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
          <div className="flex items-center justify-between">
            <span className="text-gray-400">SEO Title</span>
            {post.seo.title ? (
              <CheckCircle className="w-4 h-4 text-green-400" />
            ) : (
              <div className="w-4 h-4 rounded-full border-2 border-gray-600" />
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const StatsCard = () => (
    <Card className="bg-gray-900/40 backdrop-blur-sm border-gray-800/50">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg flex items-center">
          <BarChart3 className="h-5 w-5 mr-2 text-blue-400" />
          Content Stats
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-gray-800/30 rounded-lg">
            <div className="text-2xl font-bold text-white">{wordCount}</div>
            <div className="text-sm text-gray-400">Words</div>
          </div>
          <div className="text-center p-3 bg-gray-800/30 rounded-lg">
            <div className="text-2xl font-bold text-white">{readTime}</div>
            <div className="text-sm text-gray-400">Min Read</div>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">SEO Title Length</span>
            <span className={`${post.seo.title.length > 60 ? 'text-red-400' : post.seo.title.length > 50 ? 'text-yellow-400' : 'text-gray-300'}`}>
              {post.seo.title.length}/60
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Meta Description</span>
            <span className={`${post.seo.description.length > 160 ? 'text-red-400' : post.seo.description.length > 140 ? 'text-yellow-400' : 'text-gray-300'}`}>
              {post.seo.description.length}/160
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-900/8 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/8 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4"></div>
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
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
            <Button variant="ghost" className="mb-2 -ml-4 text-gray-400 hover:text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Posts
            </Button>
            <h1 className="text-4xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                {post.title || 'Create New Post'}
              </span>
            </h1>
            <div className="flex items-center gap-4 text-sm">
              <AnimatePresence mode="wait">
                {saveStatus === 'saving' && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="flex items-center text-yellow-400"
                  >
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse mr-2" />
                    Saving changes...
                  </motion.div>
                )}
                {saveStatus === 'saved' && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="flex items-center text-green-400"
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    All changes saved
                  </motion.div>
                )}
                {saveStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="flex items-center text-red-400"
                  >
                    <AlertCircle className="w-4 h-4 mr-2" />
                    Error saving changes
                  </motion.div>
                )}
                {saveStatus === 'idle' && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="text-gray-400"
                  >
                    Create and edit your blog post content
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center space-x-3 bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-xl px-4 py-2">
              <Switch 
                id="auto-save" 
                checked={autoSave} 
                onCheckedChange={setAutoSave} 
                className="data-[state=checked]:bg-purple-600"
              />
              <Label htmlFor="auto-save" className="text-gray-300 cursor-pointer">Auto-save</Label>
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

            {/* Content Editor Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl overflow-hidden"
            >
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="w-full bg-gray-800/30 p-0 h-auto border-b border-gray-800/50">
                  <TabsTrigger 
                    value="content" 
                    className="flex-1 py-4 px-6 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600/20 data-[state=active]:to-blue-600/20 data-[state=active]:text-purple-300 transition-all duration-300"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Content
                  </TabsTrigger>
                  <TabsTrigger 
                    value="seo" 
                    className="flex-1 py-4 px-6 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600/20 data-[state=active]:to-blue-600/20 data-[state=active]:text-purple-300 transition-all duration-300"
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    SEO Settings
                  </TabsTrigger>
                  <TabsTrigger 
                    value="metadata" 
                    className="flex-1 py-4 px-6 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600/20 data-[state=active]:to-blue-600/20 data-[state=active]:text-purple-300 transition-all duration-300"
                  >
                    <Tags className="h-4 w-4 mr-2" />
                    Categories & Tags
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="content" className="p-8 m-0">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-6">
                      <Label className="text-gray-300 font-medium">Post Content</Label>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />
                          <span>{wordCount} words</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{readTime} min read</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <Textarea
                        value={post.content}
                        onChange={(e) => handleChange('content', e.target.value)}
                        placeholder="Start writing your amazing content here... 

Tips for great content:
• Use clear headings and subheadings
• Include relevant examples and stories
• Break up text with bullet points and lists
• Add actionable insights for your readers"
                        className="bg-gray-800/30 border-gray-700/50 focus:border-purple-500/50 text-white resize-none rounded-xl min-h-[400px] text-base leading-relaxed"
                        rows={20}
                      />
                      
                      {post.content.length === 0 && (
                        <div className="absolute top-4 right-4 flex items-center gap-2 text-gray-500 text-xs">
                          <Lightbulb className="w-4 h-4" />
                          <span>Pro tip: Start with an engaging hook</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-800/50">
                      <div className="text-sm text-gray-400">
                        Minimum 100 words recommended for SEO
                      </div>
                      <div className={`text-sm ${post.content.length > 100 ? 'text-green-400' : 'text-gray-400'}`}>
                        {post.content.length > 100 ? '✓ Good length' : `${100 - post.content.split(' ').length} more words needed`}
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="seo" className="p-8 m-0 space-y-6">
                  <div className="flex items-center gap-2 mb-6">
                    <TrendingUp className="w-5 h-5 text-purple-400" />
                    <h3 className="text-lg font-medium text-white">Search Engine Optimization</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="seo-title" className="text-gray-300 mb-2 block font-medium">
                        SEO Title
                      </Label>
                      <Input
                        id="seo-title"
                        value={post.seo.title}
                        onChange={(e) => handleSeoChange('title', e.target.value)}
                        placeholder={post.title || "Enter SEO optimized title"}
                        className="bg-gray-800/50 border-gray-700/50 focus:border-purple-500/50 text-white rounded-xl"
                      />
                      <div className="flex justify-between mt-1">
                        <p className="text-xs text-gray-500">
                          This title appears in search results
                        </p>
                        <p className={`text-xs ${post.seo.title.length > 60 ? 'text-red-400' : post.seo.title.length > 50 ? 'text-yellow-400' : 'text-gray-500'}`}>
                          {post.seo.title.length}/60 chars
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="seo-description" className="text-gray-300 mb-2 block font-medium">
                        Meta Description
                      </Label>
                      <Textarea
                        id="seo-description"
                        value={post.seo.description}
                        onChange={(e) => handleSeoChange('description', e.target.value)}
                        placeholder="Brief, compelling description that appears in search results"
                        className="bg-gray-800/50 border-gray-700/50 focus:border-purple-500/50 text-white resize-none rounded-xl"
                        rows={3}
                      />
                      <div className="flex justify-between mt-1">
                        <p className="text-xs text-gray-500">
                          Appears below your title in Google search results
                        </p>
                        <p className={`text-xs ${post.seo.description.length > 160 ? 'text-red-400' : post.seo.description.length > 140 ? 'text-yellow-400' : 'text-gray-500'}`}>
                          {post.seo.description.length}/160 chars
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="seo-keywords" className="text-gray-300 mb-2 block font-medium">
                        Focus Keywords
                      </Label>
                      <Input
                        id="seo-keywords"
                        value={post.seo.keywords}
                        onChange={(e) => handleSeoChange('keywords', e.target.value)}
                        placeholder="primary keyword, secondary keyword, related term"
                        className="bg-gray-800/50 border-gray-700/50 focus:border-purple-500/50 text-white rounded-xl"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Separate keywords with commas. Focus on 1-3 main keywords.
                      </p>
                    </div>

                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
                      <div className="flex items-start gap-3">
                        <Zap className="w-5 h-5 text-blue-400 mt-0.5" />
                        <div>
                          <h4 className="text-blue-300 font-medium mb-1">SEO Tips</h4>
                          <ul className="text-sm text-blue-200/80 space-y-1">
                            <li>• Include your main keyword in the title and first paragraph</li>
                            <li>• Use descriptive, benefit-focused meta descriptions</li>
                            <li>• Keep titles under 60 characters for best display</li>
                            <li>• Write for humans first, search engines second</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="metadata" className="p-8 m-0 space-y-6">
                  <div className="flex items-center gap-2 mb-6">
                    <Tags className="w-5 h-5 text-purple-400" />
                    <h3 className="text-lg font-medium text-white">Categories & Tags</h3>
                  </div>
                  
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
                          {post.categories.map((category: string) => (
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
                        
                        {post.categories.length === 0 && (
                          <p className="text-sm text-gray-500">No categories added yet</p>
                        )}
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
                          {post.tags.map((tag: string) => (
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
                        
                        {post.tags.length === 0 && (
                          <p className="text-sm text-gray-500">No tags added yet</p>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <Label className="text-gray-300 mb-3 block font-medium">Publishing Options</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="visibility" className="text-sm text-gray-400 mb-2 block">Visibility</Label>
                        <select 
                          id="visibility"
                          value={post.visibility}
                          onChange={(e) => handleChange('visibility', e.target.value)}
                          className="w-full bg-gray-800/50 border border-gray-700/50 rounded-xl px-3 py-2 text-white focus:border-purple-500/50"
                        >
                          <option value="public">
                            🌍 Public - Visible to everyone
                          </option>
                          <option value="private">
                            🔒 Private - Only visible to you
                          </option>
                        </select>
                      </div>
                      
                      <div>
                        <Label htmlFor="publishDate" className="text-sm text-gray-400 mb-2 block">Publish Date</Label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                          <Input
                            id="publishDate"
                            type="datetime-local"
                            value={post.publishDate}
                            onChange={(e) => handleChange('publishDate', e.target.value)}
                            className="bg-gray-800/50 border-gray-700/50 focus:border-purple-500/50 text-white pl-10 rounded-xl"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
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
              <CompletionCard />
            </motion.div>
            
            {/* Content Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <StatsCard />
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
                    <ImageIcon className="h-5 w-5 mr-2 text-purple-400" />
                    Featured Image
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {post.featuredImage ? (
                    <div className="relative aspect-video overflow-hidden rounded-xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-blue-600/20 z-10"></div>
                      <img 
                        src={post.featuredImage} 
                        alt="Featured" 
                        className="object-cover w-full h-full"
                      />
                      <Button 
                        variant="secondary" 
                        size="sm"
                        className="absolute bottom-3 right-3 z-20 bg-gray-900/80 hover:bg-gray-800 backdrop-blur-sm"
                        onClick={() => handleChange('featuredImage', '')}
                      >
                        <X className="w-4 h-4 mr-1" />
                        Remove
                      </Button>
                    </div>
                  ) : (
                    <div 
                      className="flex flex-col items-center justify-center aspect-video bg-gray-800/30 rounded-xl border-2 border-dashed border-gray-700 hover:border-purple-500/50 transition-colors cursor-pointer group"
                      onClick={handleImageUpload}
                    >
                      <Upload className="h-12 w-12 text-gray-500 group-hover:text-purple-400 transition-colors mb-3" />
                      <p className="text-sm text-gray-400 group-hover:text-gray-300 text-center">
                        Click to upload image<br />
                        <span className="text-xs">JPG, PNG up to 10MB</span>
                      </p>
                    </div>
                  )}
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </CardContent>
                <CardFooter>
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
                    <div className="flex items-center gap-1">
                      {post.visibility === 'public' ? (
                        <>
                          <Globe className="w-3 h-3 text-green-400" />
                          <span className="text-green-400">Public</span>
                        </>
                      ) : (
                        <>
                          <Lock className="w-3 h-3 text-gray-400" />
                          <span className="text-gray-400">Private</span>
                        </>
                      )}
                    </div>
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
                <CardFooter className="flex flex-col gap-3">
                  <div className="grid grid-cols-2 gap-3 w-full">
                    <Button 
                      variant="outline" 
                      className="border-gray-700 hover:border-purple-500 transition-colors" 
                      onClick={handleSave}
                      disabled={isSaving}
                    >
                      <Save className="h-4 w-4 mr-2" />
                      {isSaving ? 'Saving...' : 'Save Draft'}
                    </Button>
                    
                    <Button 
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-xl shadow-purple-900/25 hover:shadow-purple-900/40 transition-all duration-300"
                      onClick={handlePublish}
                      disabled={isPublishing || !post.title.trim()}
                    >
                      {isPublishing ? (
                        <>
                          <div className="animate-spin -ml-1 mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                          Publishing...
                        </>
                      ) : (
                        <>
                          <Sparkles className="h-4 w-4 mr-2" />
                          Publish
                        </>
                      )}
                    </Button>
                  </div>
                  
                  <AnimatePresence>
                    {saveStatus === 'saved' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center justify-center text-sm text-green-400"
                      >
                        <CheckCircle className="h-4 w-4 mr-2" />
                        <span>Changes saved successfully</span>
                      </motion.div>
                    )}
                    
                    {saveStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center justify-center text-sm text-red-400"
                      >
                        <AlertCircle className="h-4 w-4 mr-2" />
                        <span>Error saving changes</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </div>
        
        {/* Preview Modal */}
        <AnimatePresence>
          {showPreview && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setShowPreview(false)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold flex items-center">
                    <Eye className="h-6 w-6 mr-3 text-purple-400" />
                    Preview
                  </h3>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setShowPreview(false)}
                    className="text-gray-400 hover:text-white"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                
                <div className="bg-gray-800/50 rounded-xl p-8">
                  <article className="prose prose-invert max-w-none">
                    <h1 className="text-3xl font-bold mb-4">{post.title || 'Post Title Preview'}</h1>
                    
                    {post.featuredImage && (
                      <div className="aspect-video w-full overflow-hidden rounded-xl mb-6">
                        <img 
                          src={post.featuredImage} 
                          alt={post.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    
                    {post.excerpt && (
                      <div className="text-xl text-gray-300 italic mb-6 p-4 bg-gray-700/30 rounded-lg border-l-4 border-purple-500">
                        {post.excerpt}
                      </div>
                    )}
                    
                    <div className="prose prose-lg prose-invert">
                      {post.content ? (
                        <div className="whitespace-pre-wrap leading-relaxed">
                          {post.content}
                        </div>
                      ) : (
                        <p className="text-gray-400 italic">No content to preview</p>
                      )}
                    </div>
                    
                    {(post.categories.length > 0 || post.tags.length > 0) && (
                      <div className="mt-8 pt-6 border-t border-gray-700">
                        {post.categories.length > 0 && (
                          <div className="mb-4">
                            <span className="text-sm text-gray-400 mr-3">Categories:</span>
                            {post.categories.map((category: string) => (
                              <Badge key={category} className="mr-2 bg-purple-500/20 text-purple-300">
                                {category}
                              </Badge>
                            ))}
                          </div>
                        )}
                        
                        {post.tags.length > 0 && (
                          <div>
                            <span className="text-sm text-gray-400 mr-3">Tags:</span>
                            {post.tags.map((tag: string) => (
                              <Badge key={tag} variant="outline" className="mr-2 border-gray-600 text-gray-300">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </article>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BlogPostForm;