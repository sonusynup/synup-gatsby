import React from 'react'
import { graphql } from 'gatsby'
import ResourceList from '../../components/molecules/ResourceList';

const WebinarList = ({
  data: {
    allContentfulWebinar: {
      edges,
    }
  }
}) => {
  const webinars = edges.map((edge) => {
    return {
      title: edge.node.webinarTitle,
      id: edge.node.id,
      to: `/resources/webinar/${edge.node.id}`,
      noImage: true,
    }
  })
  return (
    <ResourceList
      resources={webinars} 
    />
  )
}

export const query = graphql`
  query {
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
  }
`

export default WebinarList