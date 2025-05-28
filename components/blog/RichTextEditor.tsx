'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { 
  Bold, 
  Italic, 
  List, 
  ListOrdered, 
  Heading1, 
  Heading2, 
  Heading3, 
  Quote, 
  Code, 
  Link as LinkIcon,
  Image,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Underline,
  Strikethrough,
  Type
} from 'lucide-react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import TiptapImage from '@tiptap/extension-image';
import { motion } from 'framer-motion';

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  const addImage = () => {
    const url = window.prompt('Enter image URL:');
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const setLink = () => {
    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('Enter URL:', previousUrl);
    
    if (url === null) {
      return;
    }

    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }

    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  };

  return (
    <div className="border border-gray-700 rounded-t-md p-2 mb-0 flex flex-wrap gap-1 bg-gray-800/50 backdrop-blur-sm">
      <div className="flex flex-wrap gap-1 mr-2 pr-2 border-r border-gray-700">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`h-9 px-2.5 ${editor.isActive('bold') ? 'bg-gray-700 text-purple-400' : 'text-gray-300 hover:text-white'}`}
          title="Bold"
        >
          <Bold className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`h-9 px-2.5 ${editor.isActive('italic') ? 'bg-gray-700 text-purple-400' : 'text-gray-300 hover:text-white'}`}
          title="Italic"
        >
          <Italic className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`h-9 px-2.5 ${editor.isActive('underline') ? 'bg-gray-700 text-purple-400' : 'text-gray-300 hover:text-white'}`}
          title="Underline"
        >
          <Underline className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={`h-9 px-2.5 ${editor.isActive('strike') ? 'bg-gray-700 text-purple-400' : 'text-gray-300 hover:text-white'}`}
          title="Strikethrough"
        >
          <Strikethrough className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="flex flex-wrap gap-1 mr-2 pr-2 border-r border-gray-700">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`h-9 px-2.5 ${editor.isActive('heading', { level: 1 }) ? 'bg-gray-700 text-purple-400' : 'text-gray-300 hover:text-white'}`}
          title="Heading 1"
        >
          <Heading1 className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`h-9 px-2.5 ${editor.isActive('heading', { level: 2 }) ? 'bg-gray-700 text-purple-400' : 'text-gray-300 hover:text-white'}`}
          title="Heading 2"
        >
          <Heading2 className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={`h-9 px-2.5 ${editor.isActive('heading', { level: 3 }) ? 'bg-gray-700 text-purple-400' : 'text-gray-300 hover:text-white'}`}
          title="Heading 3"
        >
          <Heading3 className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={`h-9 px-2.5 ${editor.isActive('paragraph') ? 'bg-gray-700 text-purple-400' : 'text-gray-300 hover:text-white'}`}
          title="Paragraph"
        >
          <Type className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="flex flex-wrap gap-1 mr-2 pr-2 border-r border-gray-700">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`h-9 px-2.5 ${editor.isActive('bulletList') ? 'bg-gray-700 text-purple-400' : 'text-gray-300 hover:text-white'}`}
          title="Bullet List"
        >
          <List className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`h-9 px-2.5 ${editor.isActive('orderedList') ? 'bg-gray-700 text-purple-400' : 'text-gray-300 hover:text-white'}`}
          title="Numbered List"
        >
          <ListOrdered className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`h-9 px-2.5 ${editor.isActive('blockquote') ? 'bg-gray-700 text-purple-400' : 'text-gray-300 hover:text-white'}`}
          title="Quote"
        >
          <Quote className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={`h-9 px-2.5 ${editor.isActive('codeBlock') ? 'bg-gray-700 text-purple-400' : 'text-gray-300 hover:text-white'}`}
          title="Code Block"
        >
          <Code className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="flex flex-wrap gap-1 mr-2 pr-2 border-r border-gray-700">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          className={`h-9 px-2.5 ${editor.isActive({ textAlign: 'left' }) ? 'bg-gray-700 text-purple-400' : 'text-gray-300 hover:text-white'}`}
          title="Align Left"
        >
          <AlignLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          className={`h-9 px-2.5 ${editor.isActive({ textAlign: 'center' }) ? 'bg-gray-700 text-purple-400' : 'text-gray-300 hover:text-white'}`}
          title="Align Center"
        >
          <AlignCenter className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          className={`h-9 px-2.5 ${editor.isActive({ textAlign: 'right' }) ? 'bg-gray-700 text-purple-400' : 'text-gray-300 hover:text-white'}`}
          title="Align Right"
        >
          <AlignRight className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="flex flex-wrap gap-1">
        <Button
          variant="ghost"
          size="sm"
          onClick={setLink}
          className={`h-9 px-2.5 ${editor.isActive('link') ? 'bg-gray-700 text-purple-400' : 'text-gray-300 hover:text-white'}`}
          title="Insert Link"
        >
          <LinkIcon className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={addImage}
          className="h-9 px-2.5 text-gray-300 hover:text-white"
          title="Insert Image"
        >
          <Image className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

const RichTextEditor = ({ content, onChange }) => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link,
      Placeholder.configure({
        placeholder: 'Start writing your amazing content...',
      }),
      TiptapImage,
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'min-h-[400px] focus:outline-none',
      },
    },
    // Explicitly set this to false to avoid SSR hydration mismatches
    immediatelyRender: false,
  });

  // Show a placeholder during SSR or before hydration
  if (!isMounted) {
    return (
      <div className="border border-gray-700 rounded-md overflow-hidden">
        <div className="border border-gray-700 rounded-t-md p-2 mb-0 flex flex-wrap gap-1 bg-gray-800/50 backdrop-blur-sm h-[53px]"></div>
        <div className="p-4 min-h-[400px] bg-gray-800/30 prose prose-invert max-w-none">
          <div className="min-h-[400px] focus:outline-none"></div>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="border border-gray-700 rounded-md overflow-hidden"
    >
      <MenuBar editor={editor} />
      <div className="p-4 min-h-[400px] bg-gray-800/30 prose prose-invert max-w-none">
        <EditorContent editor={editor} />
      </div>
    </motion.div>
  );
};

export default RichTextEditor;
