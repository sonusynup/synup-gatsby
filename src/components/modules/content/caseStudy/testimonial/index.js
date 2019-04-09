import React from "react"

import DefaultTestimonial from "./default"
import InlineTestimonial from "./inline"
import CenteredTestimonial from "./centered"

const Testimonial = ({ caseSectionType, ...props }) => {
  switch (caseSectionType) {
    case "default":
      return <DefaultTestimonial {...props} />
    case "inline":
      return <InlineTestimonial {...props} />
    case "centered":
      return <CenteredTestimonial {...props} />
    default:
      return null
  }
}

export default Testimonial
