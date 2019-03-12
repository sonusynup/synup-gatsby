import React from 'react'

import PropTypes from 'prop-types'
import PrimaryButtonAnimation from '../../images/svgComponents/primaryButtonAnimation';

const Button = ({ 
  type,
  text,
}) => {
  switch (type) {
    default:
      return (
        <button class="btn btn_primary btn_arrow">
          <span class="btn_textSpan">
            {text}
            <PrimaryButtonAnimation />
          </span>
        </button>
      ) 

  }
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Button