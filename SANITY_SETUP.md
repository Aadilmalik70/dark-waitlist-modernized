# Sanity Blog System Setup Guide

This project has been updated to use Sanity CMS for blog management, replacing the previous custom MySQL implementation while preserving the existing dark theme design.

## Quick Setup

### 1. Create a Sanity Project

1. Go to [sanity.io](https://sanity.io) and create a free account
2. Create a new project
3. Choose "Clean project with no predefined schema"
4. Note your **Project ID**

### 2. Configure Environment Variables

1. Copy `.env.local.example` to `.env.local`
2. Update the Sanity configuration:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

### 3. Access Sanity Studio

1. Start your development server: `npm run dev`
2. Navigate to `http://localhost:3000/admin`
3. Sign in with your Sanity account
4. You can now create authors, categories, and blog posts

### 4. Create Sample Content

In Sanity Studio, create:

1. **Authors**: Add author profiles with names, images, and bios
2. **Categories**: Create categories like "SEO", "Content Strategy", "AI"
3. **Posts**: Create blog posts with:
   - Title and slug
   - Author reference
   - Featured image
   - Categories
   - Excerpt
   - Rich text content
   - SEO metadata

## Features

### Preserved from Original Theme
- Dark purple/blue gradient design
- Glass morphism effects with backdrop blur
- Framer Motion animations
- Responsive grid layouts
- Search functionality
- Category badges
- Author information display

### New Sanity Features
- Rich text editing with Portable Text
- Image handling with automatic optimization
- Content relationships (authors, categories)
- SEO metadata management
- Estimated reading time calculation
- Admin interface at `/admin`

## File Structure

```
├── app/
│   ├── admin/[[...tool]]/page.tsx    # Sanity Studio
│   ├── blog/
│   │   ├── page.tsx                  # Blog listing page
│   │   └── [slug]/page.tsx          # Individual blog post
├── components/blog/
│   └── SanityBlogPostCard.tsx       # Blog post card component
├── lib/
│   ├── sanity.ts                    # Sanity client config
│   └── portableText.tsx             # Rich text rendering
├── sanity/
│   └── schemas/                     # Content schemas
│       ├── index.ts
│       ├── post.ts
│       ├── author.ts
│       ├── category.ts
│       └── blockContent.ts
└── sanity.config.ts                 # Main Sanity configuration
```

## Content Schema

### Post
- Title, slug, excerpt
- Author (reference)
- Categories (array of references)
- Featured image with alt text
- Rich text body with images and code blocks
- SEO metadata
- Published date

### Author
- Name, slug, bio
- Profile image with alt text

### Category
- Title, slug, description

## Migration from MySQL

The previous MySQL blog system files are preserved:
- `lib/blog-db.ts` - Database connection and queries
- `components/blog/` - Original blog components
- `pages/blog/` - Pages Router blog pages
- `pages/api/blog/` - API routes

You can safely remove these after confirming the Sanity system works correctly.

## Testing

1. Ensure Sanity Studio loads at `/admin`
2. Create sample content (author, categories, posts)
3. Verify blog listing at `/blog` shows posts
4. Test individual post pages at `/blog/[slug]`
5. Test search functionality
6. Verify responsive design on mobile/tablet

## Deployment

1. Deploy to Vercel/Netlify as usual
2. Add environment variables to your deployment platform
3. Sanity Studio will be available at `yoursite.com/admin`

## Support

If you encounter issues:
1. Ensure environment variables are correctly set
2. Check Sanity project permissions
3. Verify schema is deployed to your Sanity project
4. Check browser console for errors