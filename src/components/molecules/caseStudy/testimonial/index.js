import React from 'react'

import PropTypes from 'prop-types'

import Type1 from './type1'
import Type2 from './type2'

const Testimonial = ({
  type,
  ...props,
}) => {
  switch (type) {
    case 'Type 1':
      return (
        <Type1 {...props} />
      )
      break;
    case 'Type 2':
      return (
        <Type2 {...props} />
      )
      break;
    default: 
        return null
  }
}

export default Testimonial