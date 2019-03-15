import React from 'react'
import { graphql } from 'gatsby'
import ResourceList from '../../components/molecules/ResourceList';

const GuidesList = ({
  data: {
    allContentfulGuides: {
      edges,
    }
  }
}) => {
  const guides = edges.map((edge) => {
    return {
      title: edge.node.guideTitle,
      id: edge.node.id,
      to: `/resources/guide/${edge.node.id}`,
      noImage: true,
    }
  })
  return (
    <ResourceList
      resources={guides} 
    />
  )
}

export const query = graphql`
  query {
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
            images{
              file {
                url
              }
            }
            meta {
              meta {
                type
                label
                value
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
  }
`

export default GuidesList