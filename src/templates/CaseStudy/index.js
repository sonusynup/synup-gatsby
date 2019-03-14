import React from 'react'

import Layout from '../../components/layout';

import CaseStudyHeader from '../../components/modules/casestudy/CaseStudyHeader'
import CaseStudyContent from '../../components/modules/casestudy/CaseStudyContent'

const CaseStudy = ({
  pageContext: {
    caseStudyDetails: {
      casestudyDescription,
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
      description={casestudyDescription}
    />       
  </Layout>
)

export default CaseStudy