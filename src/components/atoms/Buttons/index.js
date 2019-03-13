import React from 'react'

import PropTypes from 'prop-types'
import PrimaryButtonAnimation from '../../images/svgComponents/primaryButtonAnimation';

const Button = ({ 
  type,
  text,
  fullWidthBtn
}) => {
  const fullWidthClass = fullWidthBtn ? 'btn_fullWidth' : '';

  switch (type) {
    default:
      return (
        <button className={`btn btn_primary btn_arrow ${fullWidthClass}`}>
          <span className="btn_textSpan">
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