import React from 'react'

import EbookDetails from './ebookDetails'
import EbookSubscriptionForm from './EbookSubscriptionForm'

const EbookSubscribe = ({
  bookDetails,
}) => (
  <section>
    <div className="container">
      <div className="blockWrapper">
        <EbookDetails
          bookDetails={bookDetails}
        />
        <EbookSubscriptionForm />
      </div>
    </div>
  </section>
)

export default EbookSubscribe


