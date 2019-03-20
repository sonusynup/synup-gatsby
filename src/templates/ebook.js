import React from 'react'
import PropTypes from 'prop-types'

import Layout from "../components/layout"

import OtherEbooks from '../components/modules/ebook/otherEbooks'
import EbookSubscribe from '../components/modules/ebook/ebookSubscribe'

// Ebook Template for the dynamic page generated
const Ebook = ({
  pageContext: {
    bookDetails,
    latestBooksLimited,
  }
}) => (
  <Layout>
    <EbookSubscribe 
      bookDetails={bookDetails}
    />
    <OtherEbooks
      latestBooksLimited={latestBooksLimited}
    />
  </Layout>
)

Ebook.propTypes = {
  bookDetails: PropTypes.shape({
    bookCoverImage: PropTypes.object,
    bookDescripton: PropTypes.object,
    bookTitle: PropTypes.string,
  })
}

export default Ebook