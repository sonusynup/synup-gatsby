import React from "react"
import { graphql, Link } from "gatsby"
import Button from "../../components/atoms/button"
import TargetLink from "../../components/atoms/targetLink"
import Layout from "../../components/layout"

const GuidesList = ({
  data: {
    allContentfulGuides: { edges },
  },
}) => {
  const guides = edges.map(edge => {
    return {
      title: edge.node.guideTitle,
      id: edge.node.id,
      to: `/resources/guide/${edge.node.id}`,
      noImage: true,
    }
  })
  return (
    <Layout>
      <div className="container">
        <section className="section_blog">
          <div className="container">
            <h3>Customer Stories</h3>
            <div className="blogWrapper">
              {edges.map(edge => (
                <div className="blogWrapper_right">
                  <div className="card_deck">
                    <div className="blogWrapper_inner">
                      <TargetLink
                        to={`resources/guide/${edge.node.id}`}
                        className="blogcard_anchor"
                      >
                        <p className="blogcard_text">{edge.node.guideTitle}</p>
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
    allContentfulGuides {
      edges {
        node {
          id
          guideTitle
        }
      }
    }
  }
`

export default GuidesList
