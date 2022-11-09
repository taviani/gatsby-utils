module.exports = (options) => ({
  siteMetadata: {
    siteTitle: `Minimal Blog`,
    siteTitleAlt: `Minimal Blog - @taviani/gatsby-theme-minimal-blog`,
    siteHeadline: `Minimal Blog - Gatsby Theme from @lekoarts`,
    siteDescription: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and line highlighting.`,
    siteImage: `/banner.jpg`,
    author: `@Ed_Lac`,
  },
  plugins: [
    {
      resolve: `@taviani/gatsby-theme-minimal-blog-core`,
      options,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `texts`,
        path: `${__dirname}/src/texts`,
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-theme-ui`,
  ],
})
