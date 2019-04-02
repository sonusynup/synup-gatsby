import React from 'react'
import { graphql,Link } from 'gatsby'
import ResourceList from '../../components/molecules/resourceList';

const WebinarList = ({
  data: {
    allContentfulWebinar: {
      edges,
    }
  }
}) => {
  const webinars = edges.map((edge) => {
  console.log(edge,'edge')
    return {
      title: edge.node.webinarTitle,
      id: edge.node.id,
      to: `/resources/webinar/${edge.node.id}`,
      noImage: true,
      speakerName: edge.node.speakers.speakers[0].speakerName
    }
  })
  console.log(webinars,'webinars')
  return (
    edges.map((edge) =>(
      <div class="rightBlock webinar_resourceBlock">
      <Link to ="/resources/webinars">
          <div className="blogTool-overlay"></div>
          <div className="resourcesHeading">
              <div className="blogInnerTool-overlay"></div>
                  <h5 class>{edge.node.webinarTitle}</h5>
                  <p class>{edge.node.webinarDate}</p>
          </div>
          <div className="resource_inner">
              <img className="webinarAvartar" src= {edge.node.speakers.speakers[0].speakerPhoto.file.url} ></img>
                  <div className>
                      <p class="speaker">{edge.node.speakers.speakers[0].speakerName}</p>
                      <p class="position" 
                      dangerouslySetInnerHTML=
                      {{ __html: edge.node.speakers.speakers[0].speakerDescription.childContentfulRichText.html}}>
                      </p>
                  </div>
          </div>
      </Link>
  </div>
    ))
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