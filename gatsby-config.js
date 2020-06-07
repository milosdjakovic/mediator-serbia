module.exports = {
  pathPrefix: `/mediatorserbia`,
  siteMetadata: {
    title: `Svetlana Milenković`,
    description: `Medijator`,
    author: `Milos Djakovic`,
    quote: {
      text: `"Mnogi ljudi ne slušaju da bi razumeli, već da bi odgovorili"`,
      author: `Stiven R. Kovi`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-react-redux`,
      options: {
        pathToCreateStoreModule: "./src/state/createStore",
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-meta-redirect`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-catch-links`,
      options: {
        excludePattern: /(excluded-link|external)/,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-classes`,
            options: {
              classMap: {
                "heading[depth=1]": `text-4xl`,
                "heading[depth=2]": `text-2xl mt-4`,
                "heading[depth=3]": `text-xl mt-4`,
                paragraph: `mt-4 text-lg`,
                listItem: `ml-8`,
                table: `mt-4 text-left`,
                "list[ordered=false]": `mt-4 list-disc`,
                "list[ordered=true]": `mt-4 list-disc`,
                link: `underline text-teal-500`,
                blockquote: `mt-4 px-6 pt-2 pb-4 bg-teal-100 border-l-2 border-teal-500`,
                "blockquote > paragraph:first-child": `text-2xl text-teal-600`,
                "blockquote > paragraph:nth-child(2)": `text-gray-600 text-right`,
                hr: `border-t-2 opacity-25 border-teal-900`,
              },
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/mediator-serbia-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
