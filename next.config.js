module.exports = {
  async redirects() {
    return [
      {
        source: '/blog/create-content-that-dominates-search',
        destination: '/404',
        permanent: false
      },
      {
        source: '/blog/category/digital-marketing',
        destination: '/',
        permanent: true
      }
    ]
  }
}