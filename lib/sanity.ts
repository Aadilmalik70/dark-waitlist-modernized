import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);

// GROQ queries for blog posts
export const postsQuery = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  author->{
    name,
    image
  },
  mainImage,
  categories[]->{
    _id,
    title
  },
  publishedAt,
  excerpt,
  body,
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 )
}`;

export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  author->{
    name,
    image,
    bio
  },
  mainImage,
  categories[]->{
    _id,
    title
  },
  publishedAt,
  excerpt,
  body,
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 )
}`;

export const categoriesQuery = `*[_type == "category"] | order(title asc) {
  _id,
  title,
  description
}`;