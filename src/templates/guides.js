import React from 'react'

import Layout from '../components/layout'
import GuideHeader from '../components/modules/guide/guideHeader'
import GuideDescriptionList from '../components/modules/guide/guideDescriptionList.js'

// Renders the root guides page
const Guides = ({
  pathContext: {
    guideDetails: {
      guideContent,
      guideAlert,
      guideSteps,
      guideCover,
      guideTip,
      guideTitle,
    }
  }
}) => (
  <Layout>
    <GuideHeader
      title={guideTitle}
      cover={guideCover}  
    />
    <GuideDescriptionList
      content={guideSteps}
      description={guideContent}
      alert={guideAlert}
      tip={guideTip}
    />
  </Layout>
)

export default Guides