import React from "react";
import PropTypes from "prop-types";

function Input({ type, className, children }) {
  return (
    <div className="common-input--wrap">
      <input
        className={`common-input__input ${className}`}
        type={type}
        name={className}
        id={className}
        required
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
};

Input.defaultProps = {
  children: "",
};

export default Input;
