import React from 'react'

import Layout from "../../components/layout"
import EbookDetails from '../../components/modules/ebook/ebookDetails'
import EbookSubscriptionForm from '../../components/modules/ebook/ebookSubscriptionForm'

const Ebook = (props) => (
  <Layout>
    <section className="section_hero">
      <div className="container">
        <div className="blockWrapper">
          <EbookDetails />
          <EbookSubscriptionForm />
        </div>
      </div>
    </section>
  </Layout>
)

export default Ebook