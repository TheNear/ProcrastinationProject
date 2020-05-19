import React from "react";
import PropTypes from "prop-types";

function Input({
  type,
  className,
  children,
  onChange,
  value,
  valid,
  changeValid,
}) {
  return (
    <div className="common-input--wrap">
      <input
        onFocus={() => changeValid(true)}
        className={`common-input__input ${className} ${valid ? "" : "invalid"}`}
        type={type === "email" ? "text" : type}
        autoComplete={type === "password" ? "new-password" : type}
        name={className}
        id={className}
        required
        value={value}
        onChange={(evt) => onChange(evt.target.value)}
      />
      <label className={`common-input__label ${className}`} htmlFor={className}>
        {children}
      </label>
    </div>
  );
}

Input.propTypes = {
  valid: PropTypes.bool,
  changeValid: PropTypes.func,
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

Input.defaultProps = {
  valid: true,
  changeValid: () => {},
  children: "",
  onChange: () => {},
  value: undefined,
};

export default Input;
