import React from 'react'

import Layout from '../../components/layout'
import GuideHeader from '../../components/modules/guide/GuideHeader'
import GuideDescriptionList from '../../components/modules/guide/GuideDescriptionList.js'

const Guides = ({
  pathContext: {
    guideDetails: {
      guideAlert,
      guideContent,
      guideCover,
      guideTip,
      guideTitle,
      guideDescription
    }
  }
}) => (
  <Layout>
    <GuideHeader
      title={guideTitle}
      cover={guideCover}  
    />
    <GuideDescriptionList
      content={guideContent}
      alert={guideAlert}
      tip={guideTip}
      description={guideDescription}
    />
  </Layout>
)

export default Guides