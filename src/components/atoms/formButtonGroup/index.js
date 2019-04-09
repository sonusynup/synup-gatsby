import React from "react"
import PropTypes from "prop-types"

const FormButtonGroup = ({
  name,
  label,
  wrapperClass,
  buttonGroupWrapperClass,
  buttons,
  onChange,
  buttonClass,
}) => (
  <div className={wrapperClass} role="group" aria-label="Basic">
    <label htmlFor={name}>{label}</label>
    <div className={buttonGroupWrapperClass}>
      {buttons.map(button => (
        <button
          key={button.value}
          type="button"
          className={buttonClass}
          onClick={() => onChange(button.value)}
        >
          {button.labelFirst}
          <br />
          {button.labelSecond}
        </button>
      ))}
    </div>
  </div>
)

FormButtonGroup.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  wrapperClass: PropTypes.string,
  buttonGroupWrapperClass: PropTypes.string,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      labelFirst: PropTypes.string,
      labelSecond: PropTypes.string,
      value: PropTypes.string,
    })
  ).isRequired,
  buttonClass: PropTypes.string,
}

FormButtonGroup.defaultProps = {
  wrapperClass: "btn-group",
  buttonGroupWrapperClass: "btn_groupWrapper",
  buttonClass: "btn btn_form",
}

export default FormButtonGroup
