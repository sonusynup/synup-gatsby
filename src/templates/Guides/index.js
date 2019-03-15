import React from 'react'

import Layout from '../../components/layout'
import GuideHeader from '../../components/modules/guide/GuideHeader'
import GuideDescriptionList from '../../components/modules/guide/GuideDescriptionList.js'

const Guides = ({
  pathContext: {
    guideDetails: {
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
      alert={guideAlert}
      tip={guideTip}
    />
  </Layout>
)

export default Guides