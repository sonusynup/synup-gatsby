import React from "react"
import PropTypes from "prop-types"

import Button from "../../atoms/button"
import isNull from "../../../helpers/isNull"

const BusinessDetails = ({ details }) => (
  <div className="testimonial_wrapperCard">
    <div className="va_list">
      {details.map(detail => (
        <div className="va_set">
          <a href={detail.to}>
            {!isNull(detail.metricImage) && (
              <img
                src={detail.metricImage.file.url}
                className="img_fluid"
                alt=""
              />
            )}
          </a>
          <p className="va_text">
            <span className="primary_text">{detail.metricValue}</span>
          </p>
        </div>
      ))}
    </div>
    <Button type="secondary" text="READ MORE" />
  </div>
)

BusinessDetails.prototype = {
  details: PropTypes.array,
}

BusinessDetails.defaultProps = {
  details: [
    { to: "vimeo-link", image: "image", increase: "200%" },
    { to: "vimeo-link", image: "image", increase: "200%" },
  ],
}

export default BusinessDetails
