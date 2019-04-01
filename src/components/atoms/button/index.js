import React from "react"

import PropTypes from "prop-types"
import PrimaryButtonAnimation from "../../images/svgComponents/primaryButtonAnimation"
import SecondaryButtonAnimation from "../../images/svgComponents/secondaryButtonAnimation"

const Button = ({ type, text, fullWidthBtn }) => {
  const fullWidthClass = fullWidthBtn ? "btn_fullWidth" : ""

  switch (type) {
    case "invert-primary":
      return (
        <button class="btn btn_white  btn_arrow">
          <span class="btn_textSpan">
            GET STARTED
            <SecondaryButtonAnimation />
          </span>
        </button>
      )
    case "invert-secondary":
      return (
        <button class="btn btn_outlineWhite  btn_arrow">
          <span class="btn_textSpan">
            LEARN MORE
            <PrimaryButtonAnimation />
          </span>
        </button>
      )
    case "secondary":
      return (
        <button
          className={`btn btn_outlineTransparent btn_arrow ${fullWidthClass}`}
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
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Button
