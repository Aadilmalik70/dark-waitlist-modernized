export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  mainImage?: {
    asset: any;
    alt?: string;
  };
  categories?: Category[];
  publishedAt: string;
  author: Author;
  featured?: boolean;
  tags?: string[];
  body?: any;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };
  readingTime?: number;
  _createdAt: string;
  _updatedAt: string;
}

export interface Category {
  _id: string;
  title: string;
  slug: { current: string };
  description?: string;
  color?: string;
  image?: {
    asset: any;
    alt?: string;
  };
}

export interface Author {
  _id: string;
  name: string;
  slug: { current: string };
  image?: {
    asset: any;
    alt?: string;
  };
  position?: string;
  company?: string;
  bio?: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
}

export interface BlogPostPreview extends Omit<BlogPost, 'body'> {
  // Preview version without heavy content
}
