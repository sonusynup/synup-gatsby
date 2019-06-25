

let contentfulConfig

try {
  // Load the Contentful config from the .contentful.json
  contentfulConfig = require('./.contentful')
} catch (_) {}

// Overwrite the Contentful config with environment variables if they exist
contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID || contentfulConfig.spaceId,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || contentfulConfig.accessToken,
  host: process.env.CONTENTFUL_HOST
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the delivery token need to be provided.'
  )
}

//npm i @contentful/rich-text-types
const { BLOCKS, MARKS, INLINES } = require('@contentful/rich-text-types')

module.exports = {
  siteMetadata: {
    title: `Synp`,
    description: `Webpage for Synp`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          camelCase: false,
        },
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: contentfulConfig,
    },
    {
      resolve: '@contentful/gatsby-transformer-contentful-richtext',
      options: {
        renderOptions: {
          /*
           * Defines custom html string for each node type like heading, embedded entries etc..
           * This is required to parse and style richtext
           */
          renderNode: {
            // Example
            [BLOCKS.EMBEDDED_ASSET]: node => {
              return `<img className='custom-asset img_fluid' src="${
                node.data.target.fields.file['en-US'].url
              }"/>`
            },
            [INLINES.EMBEDDED_ENTRY]: node => {
              return `<div className='custom-entry' />${
                node.data.target.fields.name['en-US']
              }</div>`
            },
          },
          /*
           * Defines custom html string for each mark type like bold, italic etc..
           */
          renderMark: {
            // Example
            [MARKS.BOLD]: text => `<custom-bold>${text}<custom-bold>`,
          },
        },
      },
    },
  ],
}
