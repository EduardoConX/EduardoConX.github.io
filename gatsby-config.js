module.exports = {
  siteMetadata: {
    title: `Eduardo Pacheco | Programador`,
    description: `CV y portfolio de Eduardo Pacheco`,
    author: `Eduardo Pacheco`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `ìmages`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Portfolio-Eduardo-Pacheco`,
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["DotGothic16", "Montserrat"],
        },
      },
    },
  ],
}
