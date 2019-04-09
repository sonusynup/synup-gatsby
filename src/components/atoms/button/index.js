import React from "react"

import PropTypes from "prop-types"
import PrimaryButtonAnimation from "../../images/svgComponents/primaryButtonAnimation"
import SecondaryButtonAnimation from "../../images/svgComponents/secondaryButtonAnimation"

const Button = ({ type, text, fullWidthBtn, buttonType, onClick }) => {
  const fullWidthClass = fullWidthBtn ? "btn_fullWidth" : ""

  switch (type) {
    case "invert-primary":
      return (
        <button
          className="btn btn_white  btn_arrow"
          type={buttonType}
          onClick={onClick}
        >
          <span className="btn_textSpan">
            {text}
            <SecondaryButtonAnimation />
          </span>
        </button>
      )
    case "invert-primary-fullwidth":
      return (
        <button
          className="btn btn_white  btn_arrow btn_fullWidth"
          type={buttonType}
          onClick={onClick}
        >
          <span className="btn_textSpan">
            {text}
            <SecondaryButtonAnimation />
          </span>
        </button>
      )
    case "invert-secondary":
      return (
        <button
          className="btn btn_outlineWhite  btn_arrow"
          type={buttonType}
          onClick={onClick}
        >
          <span className="btn_textSpan">
            {text}
            <PrimaryButtonAnimation />
          </span>
        </button>
      )
    case "secondary":
      return (
        <button
          type={buttonType}
          className={`btn btn_outlineTransparent btn_arrow ${fullWidthClass}`}
          onClick={onClick}
        >
          <span className="btn_textSpan">
            {text}
            <SecondaryButtonAnimation />
          </span>
        </button>
      )
    case "borderless":
      return (
        <span className="btn_arrow linkText linkText_span">
          {text}
          <PrimaryButtonAnimation />
        </span>
      )
    case "borderlessArrow":
      return (
        <span className="btn_arrow linkText linkText_span">
          {text}
          <SecondaryButtonAnimation />
        </span>
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
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
}

export default Button
