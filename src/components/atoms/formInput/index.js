import React from 'react'
import PropTypes from 'prop-types'

const Input = ({
  wrapperClass,
  name,
  label,
  inputType,
  inputClass,
  placeholder,
  onChange,
}) => (
  <div className={wrapperClass}>
    <label htmlFor={name}>{label}</label>
    <input
      type={inputType}
      className={inputClass}
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
)

Input.propTypes = {
  wrapperClass: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  inputClass: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

Input.defaultProps = {
  wrapperClass: 'form_field',
  inputType: 'text',
  inputClass: 'form_inputField form_control'
}

export default Input