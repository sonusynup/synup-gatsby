import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../atoms/button'

const BusinessDetails = ({
  details
}) => (
  <div className="testimonial_wrapperCard">
    <div className="va_list">
      {
        details.map((detail) => (
          <div className="va_set">
            <a href={detail.to}>
              <img
                src={detail.image}
                className="img_fluid"
                alt=""
              />
            </a>
            <p className="va_text">
              increased client leads by 
              <span className="primary_text">{detail.increase}</span>
            </p>
          </div>
        ))
      }
    </div>
    <Button
      type="secondary"
      text="READ MORE"
    />    
  </div>
)

BusinessDetails.prototype = {
  details: PropTypes.array,
}

BusinessDetails.defaultProps = {
  details: [
    { to: 'vimeo-link', image: 'image', increase: '200%' },
    { to: 'vimeo-link', image: 'image', increase: '200%' }
  ]
}

export default BusinessDetails