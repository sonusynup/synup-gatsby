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
  featureImage,
  featureIcon,
  metricValue,
  metricImage,
}) => (
  <>
    <div className="leftBlock block_flexWrap">
      <div class="block_head">
        {!isNull(featureIcon) && <img class="block_icon" src={featureIcon.file.url} alt="" />}
        <h5 class="card_title">{featureName}</h5>
        <h3 className="block_contentText">{featureTitle}</h3>  
        <ul
          className="list_unstyled"
          dangerouslySetInnerHTML={{ __html: !isNull(featureDescription) ? featureDescription.childContentfulRichText.html : null }} 
        />
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
        !isNull(metricImage) && !isNull(metricValue) ? (
          <div class="block_body">
            <div class="va_set">
              <Link to="">
                <img src={metricImage.file.url} class="img_fluid" alt="" />
              </Link>
              <p class="va_text">{metricValue}</p>
            </div>
          </div>
        ) : null
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