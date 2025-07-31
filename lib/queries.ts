import { groq } from 'next-sanity'

// Common fields for blog posts
const postFields = groq`
  _id,
  title,
  slug,
  excerpt,
  mainImage{
    asset,
    alt
  },
  categories[]->{
    _id,
    title,
    slug,
    color
  },
  publishedAt,
  author->{
    _id,
    name,
    slug,
    image{
      asset,
      alt
    },
    position,
    company
  },
  featured,
  tags,
  readingTime,
  _createdAt,
  _updatedAt
`

// Get all published blog posts with pagination
export const postsQuery = groq`
  *[_type == "post" && publishedAt < now()] | order(publishedAt desc) [($start)...($end)] {
    ${postFields}
  }
`

// Get total count of published posts
export const postsCountQuery = groq`
  count(*[_type == "post" && publishedAt < now()])
`

// Get single blog post by slug
export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug && publishedAt < now()][0] {
    ${postFields},
    body,
    seo
  }
`

// Get featured blog posts
export const featuredPostsQuery = groq`
  *[_type == "post" && featured == true && publishedAt < now()] | order(publishedAt desc) [0...4] {
    ${postFields}
  }
`

// Get recent blog posts
export const recentPostsQuery = groq`
  *[_type == "post" && publishedAt < now()] | order(publishedAt desc) [0...5] {
    ${postFields}
  }
`

// Search posts
export const searchPostsQuery = groq`
  *[_type == "post" && publishedAt < now() && (
    title match $searchTerm + "*" ||
    excerpt match $searchTerm + "*" ||
    tags[] match $searchTerm + "*"
  )] | order(publishedAt desc) [($start)...($end)] {
    ${postFields}
  }
`

// Get related posts (same categories, excluding current post)
export const relatedPostsQuery = groq`
  *[_type == "post" && publishedAt < now() && _id != $postId && count(categories[@._ref in $categoryIds]) > 0] | order(publishedAt desc) [0...3] {
    ${postFields}
  }
`

// Get all categories
export const categoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    slug,
    description,
    color,
    "postCount": count(*[_type == "post" && publishedAt < now() && ^._id in categories[]._ref])
  }
`

// Get post slugs for static paths
export const postSlugsQuery = groq`
  *[_type == "post" && publishedAt < now()].slug.current
`
