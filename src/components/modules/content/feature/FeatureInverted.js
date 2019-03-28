import React from "react"

import Button from "../../../atoms/button"

const FeatureInverted = ({
  actionType,
  featureButton,
  to,
  featureTitle,
  featureName,
  featureDescription,
}) => (
  <div className="enterprise_blockWrapper">
    <div className="leftBlock">
      <h3 className="whiteTitle">{featureTitle}</h3>
      {featureDescription !== null && (
        <ul
          className="list_unstyled whiteTitle"
          dangerouslySetInnerHTML={{
            __html: featureDescription.childContentfulRichText.html,
          }}
        />
      )}
      <Button type="invert-primary" text="GET STARTED" />
      <span class="space" />
      <Button type="invert-secondary" text="LEARN MORE" />
    </div>
  </div>
)

export default FeatureInverted
