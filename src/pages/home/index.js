import React from "react"
import PropTypes from 'prop-types'

import Layout from "../../components/layout"

import Hero from '../../components/modules/home/hero'
import Partner from '../../components/modules/home/partner'
import ProductWhatWeDo from '../../components/modules/home/productWhatWeDo'
import MainProducts from '../../components/modules/home/mainProducts'
import Features from '../../components/modules/home/features'
import CaseStudy from "../../components/modules/home/caseStudy";

import filterFromMultipleItems from '../../helpers/filterFromMultipleItems'

// Renders the home page of the app
// Will be rendered at route 'synp.com'
const IndexPage = ({
  data: {
    allContentfulCaseStudySection,
    allContentfulFeaturesSection,
    allContentfulPartnerSection,
    allContentfulProductSection,
    contentfulHeroSection
  }
}) => (
  <Layout>
    <Hero {...contentfulHeroSection} />
    <Partner {...filterFromMultipleItems(allContentfulPartnerSection, 'partnerSectionTitle', 'We power location intelligence for over 150,000 businesses')} />
    <ProductWhatWeDo {...filterFromMultipleItems(allContentfulProductSection, 'productSectionTitle', 'What we do')} />
    <MainProducts {...filterFromMultipleItems(allContentfulProductSection, 'productSectionTitle', 'Main products')} />
    <Features {...filterFromMultipleItems(allContentfulFeaturesSection, 'featureTitle', 'Synup Premium Network')} />
    <CaseStudy {...filterFromMultipleItems(allContentfulCaseStudySection, 'caseSectionType', 'Type 1')} />
  </Layout>
)

IndexPage.propTypes = {
  data: PropTypes.shape({
    allContentfulCaseStudySection: PropTypes.object.isRequired,
    allContentfulFeaturesSection: PropTypes.object.isRequired,
    allContentfulPartnerSection: PropTypes.object.isRequired,
    allContentfulProductSection: PropTypes.object.isRequired,
    contentfulHeroSection: PropTypes.object.isRequired,
  })
}

export default IndexPage

// Graphql queries for the entire page
export const query = graphql`
  query {
    contentfulHeroSection(webpage:{
      elemMatch: {
        webpageName:{
          eq: "Homepage"
        }
      }
    }) {
      id,
      heroTitle
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
    }
    allContentfulPartnerSection(filter:{
      webpage:{
        elemMatch:{
          webpageName: {
            eq:"Homepage"
          }
        }
      }
    }) {
      edges {
        node {
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
      }
    }
      allContentfulProductSection(filter:{
        webpage: {
          elemMatch: {
            webpageName: {
              eq: "Homepage"
            }
          }
        }
      }) {
        edges {
          node {
            id
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
              featureIcon {
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
        }
      }
      allContentfulFeaturesSection(filter:{
        webpage:{
          elemMatch:{
            webpageName: {
              eq: "Homepage"
            }
          }
        }
      }) {
        edges {
          node {
            id
            featureName
            featureTitle
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
            featureButton
            featureButtonType
            featureUrl
            featureImage{
              file {
                url
              }
            }
          }
        }
      }
      allContentfulCaseStudySection(filter: {
        webpage:{
          elemMatch: {
            webpageName: {
              eq: "Homepage"
            }
          }
        }
      }) {
        edges {
          node {
            id
            caseSectionType
            caseSectionUrl
            caseSectionButton
            caseSectionPartner {
              partnerName
              partnerGoal
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
`
