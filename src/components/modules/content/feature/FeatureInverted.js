import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Button from "../../../atoms/button"
import isNull from "../../../../helpers/isNull"

const getInvertedButtonType = buttonType => {
  if (buttonType === "Border") {
    return "invert-secondary"
  }
  return "invert-primary"
}

// TODO: Change schema as required
// Button style should change
const FeatureInverted = ({
  featureTitle,
  featureDescription,
  featureButtonType,
  featureButton,
  featureUrl,
  featureSecondaryButtonType,
  featureSecondaryButton,
  featureSecondaryUrl,
}) => (
  <div className="enterprise_blockWrapper">
    <div className="leftBlock">
      {!isNull(featureTitle) ? (
        <h3 className="whiteTitle">{featureTitle}</h3>
      ) : null}
      {!isNull(featureDescription) && (
        <ul
          className="list_unstyled whiteTitle"
          dangerouslySetInnerHTML={{
            __html: featureDescription.childContentfulRichText.html,
          }}
        />
      )}
      {!isNull(featureButton) ? (
        <Link to={featureUrl}>
          <Button
            type={getInvertedButtonType(featureButtonType)}
            text={featureButton}
          />
        </Link>
      ) : null}
      {!isNull(featureSecondaryButton) ? (
        <>
          <span class="space" />
          <Link to={featureSecondaryUrl}>
            <Button
              type={getInvertedButtonType(featureSecondaryButtonType)}
              text={featureSecondaryButton}
            />
          </Link>
        </>
      ) : null}
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
    }),
  }),
  featuredCaseStudy: PropTypes.shape({
    file: PropTypes.shape({
      url: PropTypes.string,
    }),
  }),
}

export default FeatureInverted
