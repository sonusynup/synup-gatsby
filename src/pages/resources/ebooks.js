import React from 'react'
import { graphql, Link } from 'gatsby'

import Button from '../../components/atoms/button'
import ContentHoverActionImage from "../../components/images/svgComponents/contentHoverActionImage"
import Layout from '../../components/layout';

const EbookList = ({
  data: {
    allContentfulEbooks: {
      edges,
    }
  }
}) => {
  const eBooks = edges.map((edge) => {
    return {
      title: edge.node.bookTitle,
      id: edge.node.id,
      to: `/resources/ebook/${edge.node.id}`,
      image: edge.node.bookCoverImage.file.url
    }
  })
  return (
    <Layout>
      <section className="ebook">
        <div className="container">
          <div className="ebook_other">
            <h3>other Ebooks</h3>
            <div className="ebook_wrapper">
              <div className="ebook_lists">
                {edges.map (Ebook => (
                  <Link to ={`/resources/ebook/${Ebook.node.id}`} className="ebook_anchor">
                    <div className="overlay_content">
                      <div className="content-overlay"></div>
                        <figure>
                          <img src={Ebook.node.bookCoverImage.file.url} className="img_fluid" alt="" />
                        </figure>
                        <div className="content-details">
                          <ContentHoverActionImage />
                        </div>
                    </div>
                  </Link>
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
            file{
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