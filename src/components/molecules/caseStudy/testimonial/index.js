import React from "react"

import PropTypes from "prop-types"

import DefaultTestimonial from "./default"
import InlineTestimonial from "./inline"
import CenteredTestimonial from "./centered"

const Testimonial = ({ type, ...props }) => {
  switch (type) {
    case "default":
      return <DefaultTestimonial {...props} />
      break
    case "inline":
      return <InlineTestimonial {...props} />
      break
    case "centered":
      return <CenteredTestimonial {...props} />
    default:
      return null
  }
}

export default Testimonial
