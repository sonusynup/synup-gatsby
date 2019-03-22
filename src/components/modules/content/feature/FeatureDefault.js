import React from 'react'

import Button from '../../../atoms/button'
import { Link } from 'gatsby'
import getButtonClass from '../../../../helpers/getButtonClass';
import isNull from '../../../../helpers/isNull'

const FeatureDefault = ({
  actionType,
  featureButtonType,
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
        !isNull(featureDescription) && (
          <ul
            className="list_unstyled"
            dangerouslySetInnerHTML={{ __html: featureDescription.childContentfulRichText.html }} 
          />
        )
      }
      {
        !isNull(featureButton) && (
          <Link to={to}>
            <Button
              type={getButtonClass(featureButtonType)}
              text={featureButton}
            />
          </Link>
        )
      }      
    </div>
    {
      !isNull(featureImage) && (
        <div class="rightBlock">
          <figure><img src={featureImage.file.url} className="img_fluid" alt="" /></figure>
        </div>
      )
    }
  </>
)

export default FeatureDefault