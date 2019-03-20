import React from "react"

import Layout from "../../components/layout"

import Hero from '../../components/modules/home/hero'
import Partner from '../../components/modules/home/partner'
import ProductWhatWeDo from '../../components/modules/home/productWhatWeDo'
import MainProducts from '../../components/modules/home/mainProducts'
import Features from '../../components/modules/home/features'
import CaseStudy from "../../components/modules/home/caseStudy";

// Renders the home page of the app
// Will be rendered at route 'synp.com'

const filterFromMultipleItems = (dataGroup, key, value) => dataGroup.edges.filter(data => data.node[key] === value)[0].node;

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
    <Hero data={contentfulHeroSection} />
    <Partner data={filterFromMultipleItems(allContentfulPartnerSection, 'partnerSectionTitle', 'We power location intelligence for over 150,000 businesses')} />
    <ProductWhatWeDo />
    <MainProducts />
    <Features />
    <CaseStudy />
  </Layout>
)

export default IndexPage

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
            productSectionImage {
              file {
                url
              }
            }
            productFeatures {
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
          }
        }
      }
    }
`
