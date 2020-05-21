import React from "react";
import PropTypes from "prop-types";

const Input = ({ type, className, children, onChange, value, valid, name }) => {
  return (
    <div className="common-input--wrap">
      <input
        // onFocus={() => changeValid(true)}
        className={`common-input__input ${className} ${valid ? "" : "invalid"}`}
        type={type === "email" ? "text" : type}
        autoComplete={type === "password" ? "new-password" : type}
        name={name || className}
        id={className}
        required
        value={value}
        onChange={onChange}
      />
      <label className={`common-input__label ${className}`} htmlFor={className}>
        {children}
      </label>
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  valid: PropTypes.any,
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

Input.defaultProps = {
  name: "",
  valid: {},
  children: "",
  onChange: () => {},
  value: undefined,
};

export default Input;
