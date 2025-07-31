import GoogleAnalyticsClient from '@/components/GoogleAnalyticsClient'
import { Analytics } from '@vercel/analytics/react'
import PerformanceMonitor from '@/components/client/PerformanceMonitor'

interface AppBodyProps {
  children: React.ReactNode
  siteUrl: string
  measurementId: string
  className: string
}

export function AppBody({ children, siteUrl, measurementId, className }: AppBodyProps) {
  return (
    <body className={`${className} antialiased bg-gray-950 text-white`}>
      {/* Skip to main content for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded-lg z-50"
      >
        Skip to main content
      </a>
      
      {/* Google Analytics */}
      <GoogleAnalyticsClient measurementId={measurementId} />
      
      {/* Main content */}
      <main id="main-content">
        {children}
      </main>
      
      {/* Client-side components */}
      <PerformanceMonitor />
      
      {/* Vercel Analytics */}
      <Analytics />
      
      {/* Service Worker Registration */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js')
                  .then(function(registration) {
                    console.log('SW registered: ', registration);
                  })
                  .catch(function(registrationError) {
                    console.log('SW registration failed: ', registrationError);
                  });
              });
            }
          `
        }}
      />
      
      {/* Development only: Schema debugging */}
      {process.env.NODE_ENV === 'development' && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
              console.log('🔍 SEO Debug Tools Available:');
              console.log('- window.seoDebug.logSchemas() - Log all page schemas');
              console.log('- window.seoDebug.validateSchemas() - Validate all schemas');
              console.log('- window.seoDebug.generateReport() - Generate SEO report');
              
              // Auto-validate schemas on page load
              window.addEventListener('load', function() {
                setTimeout(() => {
                  if (window.seoDebug) {
                    window.seoDebug.validateSchemas();
                  }
                }, 1000);
              });
            `
          }}
        />
      )}
      
      {/* Critical CSS for loading indicator */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .loading-indicator {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: linear-gradient(90deg, #7c3aed, #3b82f6);
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.3s ease;
            z-index: 9999;
          }
          
          .loading-indicator.active {
            transform: scaleX(1);
          }
        `
      }} />
      
      {/* Page loading progress */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const indicator = document.createElement('div');
              indicator.className = 'loading-indicator';
              document.body.appendChild(indicator);
              
              let progress = 0;
              const interval = setInterval(() => {
                progress += Math.random() * 30;
                if (progress >= 100) {
                  progress = 100;
                  clearInterval(interval);
                  setTimeout(() => {
                    indicator.style.opacity = '0';
                    setTimeout(() => indicator.remove(), 300);
                  }, 200);
                }
                indicator.style.transform = \`scaleX(\${progress / 100})\`;
              }, 100);
              
              window.addEventListener('load', () => {
                progress = 100;
                indicator.style.transform = 'scaleX(1)';
              });
            })();
          `
        }}
      />
    </body>
  )
}
