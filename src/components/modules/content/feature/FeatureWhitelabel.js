import React from "react"

import Button from "../../../atoms/button"
import { Link } from "gatsby"
import getButtonClass from "../../../../helpers/getButtonClass"
import isNull from "../../../../helpers/isNull"

const FeatureWhitelabel = ({
  actionType,
  featureButtonType,
  featureButton,
  to,
  featureTitle,
  featureName,
  featureDescription,
  featureImage,
  featureBackground
}) => (
  <>
    <div class="whitelabel_primaryWrapper" style={{ background: `linear-gradient(90deg, #4865ff 0%, rgba(72, 101, 255, 0.57) 100%), url(${featureBackground.file.url})`}}>
      <div class="blockWrapper">
        <div class="whitelabel_block">
          <h3 class="whiteTitle">{featureTitle}</h3>
          <p class="whitelabel_pre" dangerouslySetInnerHTML={{ __html: featureDescription.childContentfulRichText.html }} />
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

export default FeatureWhitelabel
