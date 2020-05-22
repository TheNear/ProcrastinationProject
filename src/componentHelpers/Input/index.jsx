import React from "react";
import PropTypes from "prop-types";

const Input = ({
  type,
  className,
  children,
  onChange,
  value,
  errors,
  name,
  resetValid,
}) => {
  return (
    <div className="common-input--wrap">
      <input
        onFocus={resetValid}
        className={`common-input__input ${className} ${
          !errors ? "" : "invalid"
        }`}
        type={type === "email" ? "text" : type}
        autoComplete={type === "password" ? "new-password" : type}
        name={name || className}
        id={className}
        required
        value={value}
        onChange={onChange}
      />
      <label className={`common-input__label ${className}`} htmlFor={className}>
        {errors || children}
      </label>
    </div>
  );
};

Input.propTypes = {
  resetValid: PropTypes.func,
  name: PropTypes.string,
  errors: PropTypes.string,
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

Input.defaultProps = {
  resetValid: () => {},
  name: "",
  errors: "",
  children: "",
  onChange: () => {},
  value: undefined,
};

export default React.memo(Input, (prevProp, nextProp) => {
  return (
    prevProp.value === nextProp.value && prevProp.errors === nextProp.errors
  );
});
