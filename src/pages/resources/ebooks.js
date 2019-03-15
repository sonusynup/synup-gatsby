import React from 'react'
import { graphql } from 'gatsby'
import ResourceList from '../../components/molecules/ResourceList';

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
    <ResourceList
      resources={eBooks} 
    />
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