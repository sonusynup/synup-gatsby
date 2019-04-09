import React from "react"
import PropTypes from "prop-types"

import TargetLink from "../../atoms/targetLink"
import ContentHoverableSecondaryImage from "../../images/svgComponents/conventHoverSecondaryActionImage"

const CardTransparent = ({
  title,
  description,
  isDescriptionRichText,
  action,
  image,
  to,
}) => (
  <div className="popCard">
    <TargetLink to={to}>
      <div className="card_transparent">
        <div className="card_body">
          <img className="card_imgTop" src={image} alt="FeatureCard" />
          <h5 className="card_title">{title}</h5>
          {isDescriptionRichText ? (
            <div
              className="card_text"
              dangerouslySetInnerHTML={{
                __html: description.childContentfulRichText.html,
              }}
            />
          ) : (
            <div className="card_text">{description}</div>
          )}
        </div>
        <div className="card_footer">
          <span className="btn_arrow linkText linkText_span">
            {action}
            <ContentHoverableSecondaryImage />
          </span>
        </div>
      </div>
    </TargetLink>
  </div>
)

CardTransparent.propTypes = {
  title: PropTypes.string.isRequired,
  isDescriptionRichText: PropTypes.bool.isRequired,
  action: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default CardTransparent
