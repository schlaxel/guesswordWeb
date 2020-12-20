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
    }
  ],
}
