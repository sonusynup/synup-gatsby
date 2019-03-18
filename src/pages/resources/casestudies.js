import React from 'react'
import { graphql } from 'gatsby'
import ResourceList from '../../components/molecules/ResourceList';

const CaseStudyList = ({
  data: {
    allContentfulCaseStudy: {
      edges,
    }
  }
}) => {
  const caseStudies = edges.map((edge) => {
    return {
      title: edge.node.casestudyTitle.casestudyTitle,
      id: edge.node.id,
      to: `/resources/casestudy/${edge.node.id}`,
      noImage: true,
    }
  })
  return (
    <ResourceList
      resources={caseStudies} 
    />
  )
}

export const query = graphql`
  query {
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
  }
`

export default CaseStudyList