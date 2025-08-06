import { defineConfig } from 'sanity';
import { visionTool } from '@sanity/vision';
import { schema } from './sanity/schemas';

export default defineConfig({
  basePath: '/admin',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  title: 'SERP Strategist Blog',
  schema,
  plugins: [
    visionTool(),
  ],
});