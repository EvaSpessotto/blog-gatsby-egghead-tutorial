module.exports = {
  siteMetadata: {
    title: 'My blog',
    description: 'This is a cool blog'
  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    }
  ]
}