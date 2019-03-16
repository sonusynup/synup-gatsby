import React from 'react'
import { Link } from 'gatsby'

import ContentHoverableSecondaryImage from '../../images/svgComponents/conventHoverSecondaryActionImage';

const ProductCard = ({
  title,
  description,
  action
}) => (
  <div className="popCard">
    <Link to=""></Link>
    <div className="card_transparent">
      <div className="card_body">
        <img
          className="card_imgTop"
          src={''}
          alt="FeatureCard"
        />
        <h5 className="card_title">{title}</h5>
        <p className="card_text">
          {description}
        </p>
      </div>
      <div className="card_footer">
        <span className="btn_arrow linkText linkText_span">
          {action}
          <ContentHoverableSecondaryImage />
        </span>
      </div>
    </div>
  </div>
)

export default ProductCard