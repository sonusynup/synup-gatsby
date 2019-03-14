import React from 'react'

import PropTypes from 'prop-types'
import PrimaryButtonAnimation from '../../images/svgComponents/primaryButtonAnimation';
import SecondaryButtonAnimation from '../../images/svgComponents/secondaryButtonAnimation';

const Button = ({ 
  type,
  text,
  fullWidthBtn
}) => {
  const fullWidthClass = fullWidthBtn ? 'btn_fullWidth' : '';

  switch (type) {
    case 'secondary':
      return (
        <button className={`btn btn_outlineTransparent btn_arrow ${fullWidthClass}`}>
          <span className="btn_textSpan">
            {text}
            <SecondaryButtonAnimation />
          </span>
        </button>
      ) 
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