module.exports = { 
  async headers() { 
    return [ 
      { 
        source: '/_next/static/media/:path*', 
        headers: [ 
          { 
            key: 'X-Robots-Tag', 
            value: 'noindex, nofollow', 
          }, 
        ], 
      }, 
    ]; 
  }, 
};