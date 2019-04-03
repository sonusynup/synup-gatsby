const path = require('path')

// Handles dynamic pages which essentialy creates all the resource pages
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
  {
    allContentfulWebpage(limit: 100) {
      edges{
        node {
          webpageName
          announcementMessage
          announcementUrl
          prefooterTitle
          prefooterDescription
          prefooterButtonText
          webpageSections {
            __typename
            ... on ContentfulPartnerSection {
              partnerSectionTitle
              partnerList {
                partnerIndustry
                partnerPhoto {
                  file {
                    url
                  }
                }
                partnerLogo {
                  file {
                    url
                  }
                }
                partnerName
                partnerGoal
                partnerSuccess
                partnerIndustry
                partnerUrl
                partnerDescription {
                  childContentfulRichText {
                    html
                  }
                }
                partnerTestimonial {
                  childContentfulRichText {
                    html
                  }
                }
              }
            }
            ... on ContentfulHeroSection {
              id
              heroTitle
              heroType
              heroIcon {
                file {
                  url
                }
              }
              heroCaption
              heroButtonType
              heroButtonText
              heroButtonLink
              heroBackground {
                file{
                  url
                }
              }
              heroDescription {
                childContentfulRichText {
                  html
                }
              }
              metricValue
              metricText
            }
            ... on ContentfulProductSection {
              id
              productSectionType
              productSectionTitle
              productSectionDescription {
                childContentfulRichText {
                  html
                }
              }
              productSectionImage {
                file {
                  url
                }
              }
              productFeatures {
                featureTitle
                featureLink
                featureIcon {
                  file {
                    url
                  }
                }
                featureBackgroundImage {
                  file {
                    url
                  }
                }
                featureBackgroundHoverImage {
                  file {
                    url
                  }
                }
                featureDescription {
                  childContentfulRichText {
                    html
                  }
                }
              }
            }
            ... on ContentfulFeaturesSection {
              id
              featureName
              featureTitle
              featureType
              featureIcon {
                file {
                  url
                }
              }
              featureImage {
                file {
                  url
                }
              }
              contentAlignment
              featureDescription{
                childContentfulRichText {
                  html
                }
              }
              featureBackground {
                file {
                  url
                }
              }
              featureButton
              featureButtonType
              featureUrl
              featureSecondaryButton
              featureSecondaryButtonType
              featureSecondaryUrl
              metricValue
              metricUrl
              metricImage {
                file {
                  url
                }
              }
              featuredCaseStudy {
              	partnerTestimonial {
                  childContentfulRichText {
                    html
                  }
                }
                partnerName
                partnerDescription {
                  childContentfulRichText {
                    html
                  }
                }
                partnerPhoto {
                  file {
                    url
                  }
                }
              }
            }
            ... on ContentfulCaseStudySection {
              id
              caseSectionType
              caseSectionUrl
              caseSectionButton
              caseSectionPartner {
                partnerName
                partnerGoal
                partnerSuccess
                partnerLogo {
                  file{
                    url
                  }
                }
                partnerPhoto{
                  file {
                    url
                  }
                }
                partnerIndustry
                partnerDescription {
                  childContentfulRichText {
                    html
                  }
                }
                partnerTestimonial {
                  childContentfulRichText {
                    html
                  }
                }
              }
              caseSectionButtonType
              metricValue1
              metricValue2
              metricImage1 {
                file {
                  url
                }
              }
              metricImage2 {
                file {
                  url
                }
              }
            }
          }
        }
      }
    }
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

    const allWebpages = result.data.allContentfulWebpage.edges;
    // Creates all the pages as in the webpage section of contentful
    allWebpages.map((page) => {
      createPage({
        path: page.node.webpageName === 'home' ? '/' : page.node.webpageName,
        component: path.resolve('./src/templates/content.js'),
        context: {
          sections: page.node.webpageSections,
          announcementMessage: page.node.announcementMessage,
          announcementUrl: page.node.announcementUrl,
          prefooterTitle: page.node.prefooterTitle,
          prefooterDescription: page.node.prefooterDescription,
          prefooterButtonText: page.node.prefooterButtonText,
        }
      })
    })
    // Create dynamic pages for ebook
    ebooks.map((ebook) => {
      createPage({
        path: `resources/ebook/${ebook.node.id}`,
        component: path.resolve('./src/templates/ebook.js'),
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
        component: path.resolve('./src/templates/webinar.js'),
        context: {
          webinarDetails: webinar.node,
        }
      })
    })

    // Create dynamic pages for case study
    caseStudy.map((study) => {
      createPage({
        path: `resources/casestudy/${study.node.id}`,
        component: path.resolve('./src/templates/caseStudy.js'),
        context: {
          caseStudyDetails: study.node,
        }
      });
    });

    // Create dynamic page for guide
    guides.map((guide) => {
      createPage({
        path: `resources/guide/${guide.node.id}`,
        component: path.resolve('./src/templates/guides.js'),
        context: {
          guideDetails: guide.node
        }
      })
    })
  })
}