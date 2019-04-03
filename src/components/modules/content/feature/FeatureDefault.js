import React from "react"

import PropTypes from "prop-types"
import Button from "../../../atoms/button"
import TargetLink from "../../../atoms/targetLink"
import getButtonClass from "../../../../helpers/getButtonClass"
import isNull from "../../../../helpers/isNull"

const FeatureDefault = ({
  featureButtonType,
  featureButton,
  to,
  featureTitle,
  featureName,
  featureUrl,
  featureDescription,
  featureImage,
  featureIcon,
  metricValue,
  metricImage,
  metricUrl,
  featuredCaseStudy,
}) => {
  return (
    <>
      <div className="leftBlock block_flexWrap">
        <div className="block_head">
          {!isNull(featureIcon) && (
            <img className="block_icon" src={featureIcon.file.url} alt="" />
          )}
          <h5 className="card_title">{featureName}</h5>
          <h3 className="block_contentText">{featureTitle}</h3>
          <ul
            className="list_unstyled"
            dangerouslySetInnerHTML={{
              __html: !isNull(featureDescription)
                ? featureDescription.childContentfulRichText.html
                : null,
            }}
          />
          {!isNull(featureButton) && (
            <TargetLink to={featureUrl}>
              <Button
                type={getButtonClass(featureButtonType)}
                text={featureButton}
              />
            </TargetLink>
          )}
        </div>
        {!isNull(metricImage) && !isNull(metricValue) ? (
          <div className="block_body">
            <div className="va_set">
              <TargetLink to={metricUrl}>
                <img src={metricImage.file.url} className="img_fluid" alt="" />
              </TargetLink>
              <p className="va_text">{metricValue}</p>
            </div>
          </div>
        ) : null}
        {!isNull(featuredCaseStudy) ? (
          <div className="feature-testimonial">
            <p
              className="block_contentText testimonialContentOutline"
              dangerouslySetInnerHTML={{
                __html:
                  featuredCaseStudy.partnerTestimonial.childContentfulRichText
                    .html,
              }}
            />
            <div className="testimonialBlock_single_thumbright">
              <div className="testimonialAuthor_thumbright">
                <div className="testimonialAuthor_details">
                  <h6 className="testimonialAuthor_name">
                    {featuredCaseStudy.partnerName}
                  </h6>
                  <p
                    className="testimonialAuthor_position"
                    dangerouslySetInnerHTML={{
                      __html:
                        featuredCaseStudy.partnerDescription
                          .childContentfulRichText.html,
                    }}
                  />
                </div>
              </div>
              <div className="testimonialAuthorShadeimg_single">
                <div className="overlay_content">
                  <div className="testimonial_overlay blue_overlay" />
                  <figure>
                    <img
                      src={featuredCaseStudy.partnerPhoto.file.url}
                      className="img_fluid"
                      alt=""
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      {!isNull(featureImage) && (
        <div className="rightBlock">
          <figure>
            <img src={featureImage.file.url} className="img_fluid" alt="" />
          </figure>
        </div>
      )}
    </>
  )
}

FeatureDefault.propTypes = {
  featureButtonType: PropTypes.string,
  featureButton: PropTypes.string,
  to: PropTypes.string,
  featureTitle: PropTypes.string,
  featureName: PropTypes.string,
  featureDescription: PropTypes.shape({
    childContentfulRichText: PropTypes.shape({
      html: PropTypes.string,
    }),
  }),
  featureImage: PropTypes.shape({
    file: PropTypes.shape({
      url: PropTypes.string,
    }),
  }),
  featureIcon: PropTypes.shape({
    file: PropTypes.shape({
      url: PropTypes.string,
    }),
  }),
  metricValue: PropTypes.string,
  metricImage: PropTypes.shape({
    file: PropTypes.shape({
      url: PropTypes.string,
    }),
  }),
  featuredCaseStudy: PropTypes.shape({
    file: PropTypes.shape({
      url: PropTypes.string,
    }),
  }),
}

export default FeatureDefault
