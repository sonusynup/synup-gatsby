import React from "react"
import ResourcesImg from "../../../images/svg/cube.svg"
import TargetLink from "../../../atoms/targetLink"

const WebinarSection = props => (
  <section className="section_resource">
    <div className="container">
      <div className="blockWrapper">
        <div className="leftBlock">
          <img className="heroblock_icon" src={ResourcesImg} alt="" />
          <h3 className="resourcesTitle">Resources</h3>
          <p className="resourcesPre">
            Free ebooks, guides, tools and more to help you grow
          </p>
        </div>
        <div className="rightBlock webinar_resourceBlock">
          <TargetLink to="/resources/webinars">
            <div className="blogTool-overlay" />
            <div className="resourcesHeading">
              <div className="blogInnerTool-overlay" />
              <h5 class>{props.webinarData.edges[0].node.webinarTitle}</h5>
              <p class>{props.webinarData.edges[0].node.webinarDate}</p>
            </div>
            <div className="resource_inner">
              <img
                className="webinarAvartar"
                src={
                  props.webinarData.edges[0].node.speakers.speakers[0]
                    .speakerPhoto.file.url
                }
              />
              <div className>
                <p className="speaker">
                  {
                    props.webinarData.edges[0].node.speakers.speakers[0]
                      .speakerName
                  }
                </p>
                <p
                  className="position"
                  dangerouslySetInnerHTML={{
                    __html:
                      props.webinarData.edges[0].node.speakers.speakers[0]
                        .speakerDescription.childContentfulRichText.html,
                  }}
                />
              </div>
            </div>
          </TargetLink>
        </div>
      </div>
    </div>
  </section>
)

export default WebinarSection
