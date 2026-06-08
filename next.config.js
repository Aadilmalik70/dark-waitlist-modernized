module.exports = {
  async redirects() {
    return [
      {
        source: '/blog/create-content-that-dominates-search',
        destination: '/404',
        permanent: false
      },
      {
        source: '/blog/category/content-creation',
        destination: '/',
        permanent: false
      }
    ]
  }
}