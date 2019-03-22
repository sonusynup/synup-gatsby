import React from 'react'

import Button from '../../../atoms/button'
import { Link } from 'gatsby'

const FeatureDefault = ({
  actionType,
  featureButton,
  to,
  featureTitle,
  featureName,
  featureDescription,
  featureImage
}) => (
  <>
    <div className="leftBlock block_contentWrap">
      <h3 className="block_contentWrap">{featureTitle}</h3>
      <p className="block_contentText">{featureName}</p>
      {
        featureDescription !== null && (
          <ul
            className="list_unstyled"
            dangerouslySetInnerHTML={{ __html: featureDescription.childContentfulRichText.html }} 
          />
        )
      }
      <Link to={to}>
        <Button
          type={actionType}
          text={featureButton}
        />
      </Link>
    </div>
    {
      featureImage ? (
        <div class="rightBlock">
          <figure><img src={featureImage.file.url} class="img_fluid" alt="" /></figure>
        </div>
      ) : null
    }
  </>
)

export default FeatureDefault