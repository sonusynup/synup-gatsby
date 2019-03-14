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
    allContentfulGuides {
      edges {
        node {
          id
          guideTitle
          guideCover {
            file {
              url
            }
          }
          guideContent {
            content {
              content {
                value
              }
            }
          }
          guideTip {
            content {
              content {
                value
              }
            }
          }
          guideAlert {
            content {
              content {
                value
              }
            }
          }
          guideDescription {
            guideItemDescriptionList {
              title {
                title
              }
              description {
                description
              }
              image {
                file {
                  url
                }
              }
            }
          }
        }
      }
    }
    allContentfulCaseStudy {
      edges {
        node {
          id
          casestudyTitle {
            casestudyTitle
          }
          casestudyStats
          casestudyPartner{
            partnerName
            partnerPhoto {
              file {
                url
              }
            }
            partnerLogo {
              file{
                url
              }
            }
            partnerGoal
            partnerIndustry
            partnerSuccess
            partnerDescription{
              content {
                content {
                  value
                }
              }
            }
            partnerTestimonial {
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
    allContentfulWebinar(sort:{ fields: updatedAt }) {
      edges {
        node {
          webinarTitle
          webinarDescription {
            webinarDescription
          }
          webinarStatus
          speakers {
            speakerName
            speakerPhoto {
              file {
                url
              }
            }
            speakerLogo {
              file{
                url
              } 
            }
            speakerDescription {
              content {
                content {
                  value
                }
              }
            }
          }
          webinarLearning
          webinarDuration
          webinarDate
          webinarAgenda
          webinarJoinLink
          
        }
      }
    }
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
    const webinars = result.data.allContentfulWebinar.edges;
    const caseStudy = result.data.allContentfulCaseStudy.edges;
    const guides = result.data.allContentfulGuides.edges;

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

    webinars.map((webinar) => {
      createPage({
        path: `resources/webinar/${webinar.node.webinarTitle}`,
        component: path.resolve('./src/templates/Webinar/index.js'),
        context: {
          webinarDetails: webinar.node,
        }
      })
    })

    caseStudy.map((study) => {
      createPage({
        path: `resources/casestudy/${study.node.id}`,
        component: path.resolve('./src/templates/CaseStudy/index.js'),
        context: {
          caseStudyDetails: study.node,
        }
      });
    });

    guides.map((guide) => {
      createPage({
        path: `resources/guide/${guide.node.id}`,
        component: path.resolve('./src/templates/Guides/index.js'),
        context: {
          guideDetails: guide.node
        }
      })
    })
  })
}