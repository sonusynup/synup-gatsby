const path = require('path')

// Handles dynamic pages which essentialy creates all the resource pages
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
  {
    allContentfulGuides {
      edges {
        node {
          id
          guideTitle
          guideContent {
            childContentfulRichText {
              html
            }
          }
          guideCover {
            file {
              url
            }
          }
          guideSteps {
            title
            description {
              childContentfulRichText {
                html
              }
            }
            meta {
              type
              title
              description {
                childContentfulRichText {
                  html
                }
              }
              buttonText
            }
            images{
              file {
                url
              }
            }
          }
          videoLink {
            file {
              url
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
					caseStudyDescription {
            title
            description {
              childContentfulRichText {
                html
              }
            }
          }
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
          id
          webinarTitle
          webinarDescription {
            webinarDescription
          }
          webinarStatus
          speakers {
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
          id
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
    // Accumulates all the dynamic results from contentful
    const ebooks = result.data.allContentfulEbooks.edges;
    const webinars = result.data.allContentfulWebinar.edges;
    const caseStudy = result.data.allContentfulCaseStudy.edges;
    const guides = result.data.allContentfulGuides.edges;

    // Create dynamic pages for ebook
    ebooks.map((ebook) => {
      createPage({
        path: `resources/ebook/${ebook.node.id}`,
        component: path.resolve('./src/templates/ebook/index.js'),
        context: {
          bookDetails: ebook.node,
          latestBooksLimited: ebooks.length < 4 ? ebooks : ebooks.slice(ebooks.length - 4) // Max paginated count being 4
        }
      })
    })

    // Create dynamic pages for webinar
    webinars.map((webinar) => {
      createPage({
        path: `resources/webinar/${webinar.node.id}`,
        component: path.resolve('./src/templates/webinar/index.js'),
        context: {
          webinarDetails: webinar.node,
        }
      })
    })

    // Create dynamic pages for case study
    caseStudy.map((study) => {
      createPage({
        path: `resources/casestudy/${study.node.id}`,
        component: path.resolve('./src/templates/caseStudy/index.js'),
        context: {
          caseStudyDetails: study.node,
        }
      });
    });

    // Create dynamic page for guide
    guides.map((guide) => {
      createPage({
        path: `resources/guide/${guide.node.id}`,
        component: path.resolve('./src/templates/guides/index.js'),
        context: {
          guideDetails: guide.node
        }
      })
    })
  }) 
}