# Technical Stack

> Last Updated: 2025-08-05
> Version: 2.0.0 - Enterprise Architecture

## Application Framework
- **Backend API:** Python 3.8+ with Flask (Production: main.py → app_real.py)
- **SaaS Frontend:** Next.js 13.5.1 with App Router + enterprise dashboard
- **Waitlist Frontend:** Next.js 15.2.4 with App Router (marketing site)

## Database System
- **Backend:** SQLite with SQLAlchemy ORM (production-ready with migrations)
- **Frontend:** MySQL with Knex.js migrations and Prisma ORM
- **Enterprise Ready:** Multi-database support with migration scripts
- **Backup System:** Automated backup and restore utilities

## JavaScript Framework
- **SaaS Platform:** React 18.2.0 with TypeScript 5.2.2
- **Marketing Site:** React 19.x with TypeScript 5.x
- **State Management:** Zustand 5.0.6 + React hooks
- **Animation:** Framer Motion 12.15.0

## Import Strategy
- **Node.js:** ES modules with TypeScript
- **Python:** Package imports with fallback system

## CSS Framework
- **Tailwind CSS:** 3.4.17 with custom configuration
- **UI Components:** shadcn/ui with Radix UI primitives
- **Animations:** tailwindcss-animate

## UI Component Library
- **Primary:** Radix UI (comprehensive primitive set)
- **Enhancement:** shadcn/ui component system
- **Icons:** Lucide React 0.454.0

## Fonts Provider
- **Primary:** Google Fonts (Inter family)
- **Weights:** 400, 500, 600, 700, 800
- **Loading:** Optimized with Next.js font system

## Icon Library
- **Lucide React:** Consistent, modern icon set
- **Custom Icons:** SVG components for brand elements

## Application Hosting
- **Current:** Local development
- **Planned:** Vercel (frontend) + Railway/Heroku (backend)
- **Alternative:** Docker containers on VPS

## Database Hosting
- **Current:** Aiven MySQL Cloud (configured)
- **Credentials:** Environment variables in .env.local
- **Backup:** JSON storage system

## Asset Hosting
- **Current:** Next.js public directory
- **Images:** Next.js Image optimization
- **Planned:** Cloudinary for user uploads

## Deployment Solution
- **CI/CD:** GitHub Actions (planned)
- **Containerization:** Docker multi-stage builds
- **Monitoring:** Health checks and logging
- **SSL:** Nginx reverse proxy configuration

## Code Repository
- **Platform:** Git (local)
- **Remote:** Not yet configured
- **Recommended:** GitHub for collaboration and deployment

## Google APIs Integration (Enterprise)
- **Google Custom Search API:** Real-time SERP data with enterprise quotas
- **Google Gemini API:** AI-powered content blueprint generation
- **Google Natural Language API:** Advanced text analysis and entity extraction
- **Google Knowledge Graph API:** Entity relationships and semantic analysis
- **Google Search Console API:** Performance tracking and optimization
- **Migration Manager:** Seamless fallback orchestration
- **SerpAPI:** Enterprise fallback with dedicated quota

## Development Tools
- **Backend Package Manager:** pip with requirements.txt
- **Frontend Package Manager:** npm with lock files
- **Type Checking:** TypeScript 5.2.2 + Python type hints
- **Linting:** ESLint (frontend) + Python linting
- **Testing:** Playwright + Python unit tests
- **Database:** Knex.js migrations + SQLAlchemy migrations
- **Authentication:** NextAuth.js + JWT tokens
- **Analytics:** Vercel Analytics + Google Analytics

## Enterprise Architecture
- **Containerization:** Docker with multi-stage builds
- **Load Balancing:** Nginx reverse proxy with SSL
- **WebSocket Support:** Real-time collaboration with Socket.IO
- **Monitoring:** Health checks, logging, and metrics
- **Security:** CORS, input validation, environment isolation
- **Deployment:** Production-ready Docker Compose + deployment scripts