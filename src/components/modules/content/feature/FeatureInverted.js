import React from "react"

import PropTypes from 'prop-types'
import Button from "../../../atoms/button"
import isNull from "../../../../helpers/isNull";

// TODO: Change schema as required
// Button style should change
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

FeatureInverted.propTypes = {
  featureButtonType: PropTypes.string,
  featureButton: PropTypes.string,
  featureTitle: PropTypes.string,
  featureName: PropTypes.string,
  featureDescription: PropTypes.shape({
    childContentfulRichText: PropTypes.shape({
      html: PropTypes.string,
    })
  }),
  featuredCaseStudy: PropTypes.shape({
    file: PropTypes.shape({
      url: PropTypes.string,
    })
  }),
}

export default FeatureInverted
