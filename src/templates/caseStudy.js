import React from 'react'

import Layout from '../components/layout';

import CaseStudyHeader from '../components/modules/casestudy/caseStudyHeader'
import CaseStudyContent from '../components/modules/casestudy/caseStudyContent'

// Renders the case study component
const CaseStudy = ({
  pageContext: {
    caseStudyDetails: {
      caseStudyDescription,
      casestudyPartner,
      casestudyStats,
      casestudyTitle,
    }
  }
}) => (
  <Layout>
    <CaseStudyHeader
      title={casestudyTitle}
      stats={casestudyStats}
    />
    <CaseStudyContent
      partner={casestudyPartner}
      description={caseStudyDescription}
    />       
  </Layout>
)

export default CaseStudy