import React from "react"
import PropTypes from "prop-types"

import { Link } from 'gatsby'
import Button from "../../../atoms/button"
import isNull from "../../../../helpers/isNull"

const BusinessDetails = ({
  metricImage1,
  metricValue1,
  metricImage2,
  metricValue2,
}) => {
  const details=[
    { metricValue: metricValue1, metricImage: metricImage1 },
    { metricValue: metricValue2, metricImage: metricImage2 },
  ];
  return (
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
              <span>{detail.metricValue}</span>
            </p>
          </div>
        ))}
      </div>
      <Link to="/resources/casestudies">
        <Button type="secondary" text="READ MORE" />
      </Link>
    </div>
  )
}

BusinessDetails.prototype = {
  metricValue1: PropTypes.string,
  metricValue2: PropTypes.string,
  metricImage1: PropTypes.string,
  metricImage2: PropTypes.string,
}

BusinessDetails.defaultProps = {
  metricValue1: '',
  metricValue2: '',
  metricImage1: '',
  metricImage2: '',
}

export default BusinessDetails
