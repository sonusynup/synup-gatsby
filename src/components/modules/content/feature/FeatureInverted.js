import React from "react"

import Button from "../../../atoms/button"
import isNull from "../../../../helpers/isNull";

const FeatureInverted = ({
  featureTitle,
  featureDescription,
  featureButtonType,
  featureButton,
}) => (
  <div className="enterprise_blockWrapper">
    <div className="leftBlock">
      {!isNull(featureTitle) ? <h3 className="whiteTitle">{featureTitle}</h3> : null}
      {!isNull(featureDescription) && (
        <ul
          className="list_unstyled whiteTitle"
          dangerouslySetInnerHTML={{
            __html: featureDescription.childContentfulRichText.html,
          }}
        />
      )}
      {!isNull(featureButton) ? <Button type="invert-primary" text={featureButton} /> : null}
      <span class="space" />
      <Button type="invert-secondary" text="LEARN MORE" />
    </div>
  </div>
)

export default FeatureInverted
