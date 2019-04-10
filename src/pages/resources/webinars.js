import React from "react"
import { graphql } from "gatsby"
import TargetLink from "../../components/atoms/targetLink"
import Layout from "../../components/layout"

const WebinarList = ({
  data: {
    allContentfulWebinar: { edges },
  },
}) => {
  return (
    <Layout>
      <div className="container">
        {edges.map((edge, index) => (
          <div className="blockWrapper" key={index}>
            <div className="rightBlock webinar_resourceBlock">
              <TargetLink to={`/resources/webinar/${edge.node.id}`}>
                <div className="blogTool-overlay" />
                <div className="resourcesHeading">
                  <div className="blogInnerTool-overlay" />
                  <h5 className="">{edge.node.webinarTitle}</h5>
                  <p className="">{edge.node.webinarDate}</p>
                </div>
                <div className="resource_inner">
                  <img
                    className="webinarAvartar"
                    src={edge.node.speakers.speakers[0].speakerPhoto.file.url}
                    alt=""
                  />
                  <div className="position">
                    <p className="speaker">
                      {edge.node.speakers.speakers[0].speakerName}
                    </p>
                    {edge.node.speakers.speakers[0].speakerDescription.content.map(
                      (description, index) => (
                        <p
                          className="position"
                          dangerouslySetInnerHTML={{
                            __html: description.content[0].value,
                          }}
                          index={index}
                          key={index}
                        />
                      )
                    )}
                  </div>
                </div>
              </TargetLink>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulWebinar(sort: { fields: updatedAt }) {
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
                file {
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
