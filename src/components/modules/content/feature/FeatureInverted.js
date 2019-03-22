import React from 'react'

const FeaturInverted = () => (
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