import React from "react"
import PropTypes from "prop-types"
import isNull from "../../../../helpers/isNull"

const FeatureTitleWithImage = ({ featureTitle, featureName, featureImage }) => (
  <>
    <div className="leftBlock block_contentWrap">
      {!isNull(featureName) ? (
        <h5 className="card_title">{featureName}</h5>
      ) : null}
      {!isNull(featureTitle) ? (
        <p className="featurePre block_contentText">{featureTitle}</p>
      ) : null}
    </div>
    {!isNull(featureImage) ? (
      <div className="rightBlock">
        <figure>
          <img
            src={featureImage.file.url}
            className="featuresCard img_fluid"
            alt=""
          />
        </figure>
      </div>
    ) : null}
  </>
)

FeatureTitleWithImage.propTypes = {
  metricImage: PropTypes.shape({
    file: PropTypes.shape({
      url: PropTypes.string,
    }),
  }),
  featureTitle: PropTypes.string,
  featureName: PropTypes.string,
}

export default FeatureTitleWithImage
