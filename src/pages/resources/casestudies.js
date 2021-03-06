import React from "react"
import { graphql } from "gatsby"
import Button from "../../components/atoms/button"
import TargetLink from "../../components/atoms/targetLink"
import Layout from "../../components/layout"

const CaseStudyList = ({
  data: {
    allContentfulCaseStudy: { edges },
  },
}) => {
  return (
    <Layout>
      <div className="container">
        <section className="section_blog">
          <div className="container">
            <h3>Customer Stories</h3>
            <div className="blogWrapper">
              {edges.map((edge, index) => (
                <div className="blogWrapper_right" key={index}>
                  <div className="card_deck">
                    <div className="blogWrapper_inner">
                      <TargetLink
                        to={`resources/casestudy/${edge.node.id}`}
                        className="blogcard_anchor"
                      >
                        <p className="blogcard_text">
                          {edge.node.casestudyTitle.casestudyTitle}
                        </p>
                        <Button type="borderlessArrow" text="READ STORY" />
                      </TargetLink>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
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
          casestudyPartner {
            partnerName
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
            partnerGoal
            partnerIndustry
            partnerSuccess
            partnerDescription {
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
