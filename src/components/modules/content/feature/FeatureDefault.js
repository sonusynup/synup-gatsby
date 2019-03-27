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
  featuredCaseStudy,

}) => {

  return (
    <>
      <div className="leftBlock block_flexWrap">
        <div className="block_head">
          {!isNull(featureIcon) && <img className="block_icon" src={featureIcon.file.url} alt="" />}
          <h5 className="card_title">{featureName}</h5>
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
            <div className="block_body">
              <div className="va_set">
                <Link to="">
                  <img src={metricImage.file.url} className="img_fluid" alt="" />
                </Link>
                <p className="va_text">{metricValue}</p>
              </div>
            </div>
          ) : null
        }
        {
          (!isNull(featuredCaseStudy)) ? (
            <>
              <p
                className="block_contentText testimonialContentOutline"
                dangerouslySetInnerHTML={{ __html: featuredCaseStudy.partnerTestimonial.childContentfulRichText.html }}
              />
              <div className="testimonialBlock_single_thumbright">
                  <div className="testimonialAuthor_thumbright">
                      <div className="testimonialAuthor_details">
                          <h6 className="testimonialAuthor_name">{featuredCaseStudy.partnerName}</h6>
                          <p
                            className="testimonialAuthor_position"
                            dangerouslySetInnerHTML={{ __html: featuredCaseStudy.partnerDescription.childContentfulRichText.html }}
                          />
                      </div>
                  </div>
                  <div className="testimonialAuthorShadeimg_single">
                    <div className="overlay_content">
                      <div className="testimonial_overlay blue_overlay"></div>
                      <figure>
                        <img src={featuredCaseStudy.partnerPhoto.file.url} className="img_fluid" alt="" />
                      </figure>
                    </div>
                  </div>
              </div>
            </>
          ) : null        
        }
      </div>
      {
        !isNull(featureImage) && (
          <div className="rightBlock">
            <figure><img src={featureImage.file.url} className="img_fluid" alt="" /></figure>
          </div>
        )
      }
      
    </>
  )
}


export default FeatureDefault