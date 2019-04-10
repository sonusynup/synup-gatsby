import React from "react"
import PropTypes from "prop-types"

import FeatureDefault from "./FeatureDefault"
import FeatureInverted from "./FeatureInverted"
import FeatureWhitelabel from "./FeatureWhitelabel"
import FeatureTitleWithImage from "./FeatureTitleWithImage"

const Feature = ({ featureType, ...props }) => {
  let FeatureContent = null
  switch (featureType) {
    case "default":
      FeatureContent = <FeatureDefault {...props} />
      break
    case "inverted":
      FeatureContent = <FeatureInverted {...props} />
      break
    case "whitelabelType":
      FeatureContent = <FeatureWhitelabel {...props} />
      break
    case "titleWithImage":
      FeatureContent = <FeatureTitleWithImage {...props} />
      break
    default:
      return null
  }

  return (
    <section className="section_wrapper">
      <div className="container">
        <div
          className={`blockWrapper ${
            props.contentAlignment === "Right align content"
              ? " d-flex_reverse"
              : null
          }`}
        >
          {FeatureContent}
        </div>
      </div>
    </section>
  )
}

Feature.propTypes = {
  wrapperClass: PropTypes.string,
  featureDescription: PropTypes.object,
  actionType: PropTypes.string,
  actionText: PropTypes.string,
  to: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
}

Feature.defaultProps = {
  featureDescription: {
    childContentfulRichText: {
      html: null,
    },
  },
}

export default Feature
