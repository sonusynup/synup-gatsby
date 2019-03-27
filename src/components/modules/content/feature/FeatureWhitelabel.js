import React from 'react'

import Button from '../../../atoms/button'
import { Link } from 'gatsby'
import getButtonClass from '../../../../helpers/getButtonClass';
import isNull from '../../../../helpers/isNull'

const FeatureWhitelabel = ({
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
  <div className="whitelabel_primaryWrapper">
    <div className="leftBlock block_contentWrap">
      <h3 className="block_contentWrap whiteTitle">{featureTitle}</h3>
      <p className="block_contentText ">{featureName}</p>
        {
          !isNull(featureDescription) && (
            <p
              className="whitelabel_pre"
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

export default FeatureWhitelabel