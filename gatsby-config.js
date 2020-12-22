/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-styled-components',
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
          options: {
            name: `markdown`,
            path: `${__dirname}/src/markdown/`
          }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Sriracha', 'Source Sans Pro', 'Luckiest Guy']
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Guessword`,
        short_name: `Guessword`,
        start_url: `/`,
        background_color: `#121212`,
        theme_color: `#121212`,
        display: `browser`,
        icon: `src/img/logo.png`
      },
    },
  ],
}
