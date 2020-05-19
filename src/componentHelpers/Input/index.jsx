import React from "react";
import PropTypes from "prop-types";

function Input({ type, className, children, onChange, value }) {
  return (
    <div className="common-input--wrap">
      <input
        className={`common-input__input ${className}`}
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
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

Input.defaultProps = {
  children: "",
  onChange: () => {},
  value: undefined,
};

export default Input;
