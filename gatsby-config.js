module.exports = {
  siteMetadata: {
    title: `Ajit Singh`,
    description: `Ajit's personal site.`,
    author: `@ajitid`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ajit Singh`,
        short_name: `Ajit Singh`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#ffcd72`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`
      }
    },
    // "gatsby-plugin-offline",

    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
        purgeOnly: ["src/css/global.css"] // global.css contains Tailwind's @tailwind
        // whitelist: ['whitelist'], // Don't remove this selector
        // ignore: ["/ignored.css", "prismjs/", "docsearch.js/"] // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      }
    },

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              showLineNumbers: false,
              noInlineHighlight: false
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/datasource/blog/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/datasource/projects/`
      }
    }
  ]
};
