import React from "react"

import PropTypes from "prop-types"
import isNull from "../../../../helpers/isNull"

const FeatureWhitelabel = ({
  featureTitle,
  featureDescription,
  featureImage,
  featureBackground,
}) => (
  <>
    <div
      class="whitelabel_primaryWrapper"
      style={{
        background: `linear-gradient(90deg, #4865ff 0%, rgba(72, 101, 255, 0.57) 100%), url(${
          featureBackground.file.url
        })`,
      }}
    >
      <div class="blockWrapper">
        <div class="whitelabel_block">
          {!isNull(featureTitle) ? (
            <h3 class="whiteTitle">{featureTitle}</h3>
          ) : null}
          {!isNull(featureDescription) ? (
            <div
              class="whitelabel_pre"
              dangerouslySetInnerHTML={{
                __html: featureDescription.childContentfulRichText.html,
              }}
            />
          ) : null}
        </div>
      </div>
    </div>
    {!isNull(featureImage) && (
      <div class="rightBlock">
        <figure>
          <img src={featureImage.file.url} className="img_fluid" alt="" />
        </figure>
      </div>
    )}
  </>
)

FeatureWhitelabel.propTypes = {
  featureImage: PropTypes.shape({
    file: PropTypes.shape({
      url: PropTypes.string,
    }),
  }),
  featureBackground: PropTypes.shape({
    file: PropTypes.shape({
      url: PropTypes.string,
    }),
  }),
  featureDescription: PropTypes.shape({
    childContentfulRichText: PropTypes.shape({
      html: PropTypes.string,
    }),
  }),
  featureTitle: PropTypes.string,
}

export default FeatureWhitelabel
