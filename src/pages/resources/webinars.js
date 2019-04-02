import React from 'react'
import { graphql,Link } from 'gatsby'
import ResourceList from '../../components/molecules/resourceList';
import Layout from '../../components/layout';

const WebinarList = ({
  data: {
    allContentfulWebinar: {
      edges,
    }
  }
}) => {

  return (
    <Layout>
      <div className="container">
        {
          edges.map((edge) =>(
            <div className="blockWrapper">
              <div className="rightBlock webinar_resourceBlock">
                <Link to ={`/resources/webinar/${edge.node.id}`}>
                  <div className="blogTool-overlay"></div>
                  <div className="resourcesHeading">
                    <div className="blogInnerTool-overlay"></div>
                    <h5 class>{edge.node.webinarTitle}</h5>
                    <p class>{edge.node.webinarDate}</p>
                  </div>
                  <div className="resource_inner">
                    <img className="webinarAvartar" src= {edge.node.speakers.speakers[0].speakerPhoto.file.url} />
                      <div className="position">
                        <p className="speaker">{edge.node.speakers.speakers[0].speakerName}</p>
                        {
                          edge.node.speakers.speakers[0].speakerDescription.content.map((description) => (
                            <p className="position" 
                              dangerouslySetInnerHTML={{ __html: description.content[0].value}}
                            />
                          ))
                        }
                      </div>
                  </div>
                </Link>
              </div>
            </div>
          ))
        }
      </div>
    </Layout>
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