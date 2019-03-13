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
    allContentfulEbooks(sort: { fields: updatedAt }) {
      edges {
        node {
          bookTitle
          bookCoverImage {
            file{
              url
            }
          }
          bookDescription {
            id
            content {
              content {
                value
              }
            }
          }
        }
      }
    }
  }
  `).then(result => {
    const ebooks = result.data.allContentfulEbooks.edges;
    ebooks.map((ebook) => {
      createPage({
        path: `resources/ebook/${ebook.node.bookTitle}`,
        component: path.resolve('./src/templates/Ebook/index.js'),
        context: {
          bookDetails: ebook.node,
          latestBooksLimited: ebooks.length < 4 ? ebooks : ebooks.slice(ebooks.length - 4) // Max paginated count being 4
        }
      })
    })
  })
}