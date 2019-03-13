const path = require('path')
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allContentfulEbooks(limit:100) {
        edges {
          node {
            bookTitle
            bookDescription {
              id
              content {
                content {
                  value
                  nodeType
                }
              }
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allContentfulEbooks.edges.map((ebook) => {
      createPage({
        path: `resources/ebook/${ebook.node.bookDescription.id}`,
        component: path.resolve('./src/templates/Ebook/index.js'),
        context: {
          bookDetails: ebook.node,
        }
      })
    })
  })
}