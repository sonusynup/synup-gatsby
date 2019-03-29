import React from "react"
import PropTypes from 'prop-types'
import isNull from '../../../../helpers/isNull'

const FeatureTitleWithImage = ({ 
  featureTitle, 
  featureName, 
  featureImage
}) => (
  <>
    <div class="leftBlock block_contentWrap">
      {!isNull(featureName) ? <h5 class="card_title">{featureName}</h5> : null}
      {!isNull(featureTitle) ? <p class="featurePre block_contentText">{featureTitle}</p> : null}
    </div>
    {!isNull(featureImage) ? (
      <div class="rightBlock">
        <figure>
          <img
            src={featureImage.file.url}
            class="featuresCard img_fluid"
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
    })
  }),
  featureTitle: PropTypes.string,
  featureName: PropTypes.string,
}

export default FeatureTitleWithImage
