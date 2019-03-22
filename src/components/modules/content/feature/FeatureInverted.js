import React from 'react'

import Button from '../../../atoms/button'

const FeatureInverted = ({
  actionType,
  featureButton,
  to,
  featureTitle,
  featureName,
  featureDescription,
}) => (
  <div class="leftBlock">
    <h3 class="whiteTitle">{featureTitle}</h3>
    {
      featureDescription !== null && (
        <ul
          className="list_unstyled"
          dangerouslySetInnerHTML={{ __html: featureDescription.childContentfulRichText.html }} 
        />
      )
    }
    <Button type="invert-primary" text="GET STARTED" />
    <span class="space"></span>
    <Button type="invert-secondary" text="LEARN MORE" />
  </div>
)

export default FeatureInverted