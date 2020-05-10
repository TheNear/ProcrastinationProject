/* eslint-disable react/button-has-type */
import React from "react";
import PropTypes from "prop-types";

function Button({ type, children, className }) {
  return (
    <button type={type} className={`common-button ${className}`}>
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  children: "Button",
  className: "",
};

export default Button;
