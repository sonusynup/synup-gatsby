import React from 'react'
import PropTypes from 'prop-types'

import Layout from "../../components/layout"
import EbookDetails from '../../components/modules/ebook/ebookDetails'
import EbookSubscriptionForm from '../../components/modules/ebook/ebookSubscriptionForm'
import OtherEbooks from '../../components/modules/ebook/otherEbooks'

const Ebook = ({
  pageContext: {
    bookDetails,
    latestBooksLimited,
  }
}) => (
  <Layout>
    <section className="section_hero">
      <div className="container">
        <div className="blockWrapper">
          <EbookDetails
            bookDetails={bookDetails}
          />
          <EbookSubscriptionForm />
        </div>
      </div>
    </section>
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