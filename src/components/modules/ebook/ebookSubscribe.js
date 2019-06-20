import React from "react"

import EbookDetails from "./ebookDetails"
import EbookSubscriptionForm from "./ebookSubscriptionForm"

import HubspotForm from 'react-hubspot-form'

// Handles ebook subscription screen
const EbookSubscribe = ({ bookDetails }) => (
  <section>
    <div className="container">
      <div className="blockWrapper">
        <EbookDetails bookDetails={bookDetails} />
        {/* <EbookSubscriptionForm /> */}
        <div className="form_wrapper">
        <HubspotForm
          portalId='5143428'
          formId='24a5d489-6818-40f7-b492-ea4bb2f36c45'
          onSubmit={() => console.log('Submit!')}
          onReady={(form) => console.log('Form ready!')}
          loading={<div>Loading...</div>}
        />
        </div>
      </div>
    </div>
  </section>
)

export default EbookSubscribe
