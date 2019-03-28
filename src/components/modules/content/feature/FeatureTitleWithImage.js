import React from "react"

const FeatureTitleWithImage = ({ featureTitle, featureName, featureImage }) => (
  <>
    <div class="leftBlock block_contentWrap">
      <h5 class="card_title">{featureName}</h5>
      <p class="featurePre block_contentText">{featureTitle}</p>
    </div>
    <div class="rightBlock">
      <figure>
        <img
          src={featureImage.file.url}
          class="featuresCard img_fluid"
          alt=""
        />
      </figure>
    </div>
  </>
)

export default FeatureTitleWithImage
