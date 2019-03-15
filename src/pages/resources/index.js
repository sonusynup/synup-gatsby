import React from 'react'

import { Link } from 'gatsby'

import Layout from '../../components/layout'
import Button from '../../components/atoms/Buttons'

const EachItem = ({
  heading,
  buttonText,
  to
}) => (
  <div className="blogWrapper_inner"  style={{ width: '800px', float: 'left', marginLeft: '30px', height: '240px' }}>
    <a href="#" className="blogcard_anchor">
      <p className="blogcard_text">
        {heading}
      </p>
      <Link
        to={to}r
      >
        <Button type="secondary" text={buttonText} />
      </Link>
    </a>
  </div>
)

const Resources = () => (
  <Layout>
    <div style={{ height: '600px' }}>
      <EachItem heading="Ebooks" to={'/resources/ebooks'} buttonText="ALL EBOOKS" />
      <EachItem heading="CaseStudies" to={'/resources/casestudies'} buttonText="ALL CASE STUDIES" />
      <EachItem heading="Webinars" to={'/resources/webinars'} buttonText="WEBINARS" />
      <EachItem heading="Guides" to={'/resources/guides'} buttonText="GUIDES" />
    </div>
  </Layout>
)

export default Resources