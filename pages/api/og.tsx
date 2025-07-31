import { NextRequest } from 'next/server'
import { ImageResponse } from 'next/og'

export const config = {
  runtime: 'edge'
}

export default function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const title = searchParams.get('title') || 'SERP Strategist'
    const description = searchParams.get('description') || 'Expert SEO insights and strategies'
    const author = searchParams.get('author') || 'SERP Strategist'
    const category = searchParams.get('category') || 'SEO Strategy'

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0f0f23',
            backgroundImage: 'radial-gradient(circle at 25px 25px, #1e1e3f 2%, transparent 0%), radial-gradient(circle at 75px 75px, #1e1e3f 2%, transparent 0%)',
            backgroundSize: '100px 100px'
          }}
        >
          {/* Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '40px'
            }}
          >
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #7c3aed, #3b82f6)',
                marginRight: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '24px',
                fontWeight: 'bold'
              }}
            >
              S
            </div>
            <div
              style={{
                color: 'white',
                fontSize: '28px',
                fontWeight: 'bold'
              }}
            >
              SERP Strategist
            </div>
          </div>

          {/* Main Content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              maxWidth: '900px',
              padding: '0 60px'
            }}
          >
            {/* Category Badge */}
            <div
              style={{
                backgroundColor: 'rgba(124, 58, 237, 0.2)',
                border: '1px solid rgba(124, 58, 237, 0.3)',
                borderRadius: '20px',
                padding: '8px 16px',
                marginBottom: '20px',
                color: '#a78bfa',
                fontSize: '14px',
                fontWeight: '600'
              }}
            >
              {category}
            </div>

            {/* Title */}
            <h1
              style={{
                background: 'linear-gradient(135deg, #ffffff, #a78bfa)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                fontSize: '54px',
                fontWeight: 'bold',
                lineHeight: '1.1',
                marginBottom: '20px',
                textAlign: 'center'
              }}
            >
              {title}
            </h1>

            {/* Description */}
            {description && (
              <p
                style={{
                  color: '#9ca3af',
                  fontSize: '20px',
                  lineHeight: '1.4',
                  marginBottom: '30px',
                  textAlign: 'center'
                }}
              >
                {description}
              </p>
            )}

            {/* Author */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                color: '#6b7280',
                fontSize: '16px'
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#374151',
                  marginRight: '12px'
                }}
              />
              <span>By {author}</span>
            </div>
          </div>

          {/* Bottom Gradient */}
          <div
            style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              right: '0',
              height: '100px',
              background: 'linear-gradient(to top, rgba(124, 58, 237, 0.1), transparent)'
            }}
          />
        </div>
      ),
      {
        width: 1200,
        height: 630
      }
    )
  } catch (error) {
    console.error('Error generating OG image:', error)
    return new Response('Failed to generate image', { status: 500 })
  }
}
