import React from 'react'

import PropTypes from 'prop-types'

import DefaultTestimonial from './default'
import InlineTestimonial from './inline'

const Testimonial = ({
  type,
  ...props,
}) => {
  switch (type) {
    case 'default':
      return (
        <DefaultTestimonial {...props} />
      )
      break;
    case 'inline':
      return (
        <InlineTestimonial {...props} />
      )
      break;
    default: 
        return null
  }
}

export default Testimonial