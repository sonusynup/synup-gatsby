import React from "react"
import { graphql } from "gatsby"

import TargetLink from "../../components/atoms/targetLink"
import ContentHoverActionImage from "../../components/images/svgComponents/contentHoverActionImage"
import Layout from "../../components/layout"

const EbookList = ({
  data: {
    allContentfulEbooks: { edges },
  },
}) => {
  return (
    <Layout>
      <section className="ebook">
        <div className="container">
          <div className="ebook_other">
            <h3>other Ebooks</h3>
            <div className="ebook_wrapper">
              <div className="ebook_lists">
                {edges.map((ebook, index) => (
                  <TargetLink
                    to={`/resources/ebook/${ebook.node.id}`}
                    className="ebook_anchor"
                    key={index}
                  >
                    <div className="overlay_content">
                      <div className="content-overlay" />
                      <figure>
                        <img
                          src={ebook.node.bookCoverImage.file.url}
                          className="img_fluid"
                          alt=""
                        />
                      </figure>
                      <div className="content-details">
                        <ContentHoverActionImage />
                      </div>
                    </div>
                  </TargetLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulEbooks(sort: { fields: updatedAt }) {
      edges {
        node {
          id
          bookTitle
          bookCoverImage {
            file {
              url
            }
          }
          bookDescription {
            id
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
`

export default EbookList
