import React, { useState } from "react";
import PropTypes from "prop-types";
import "./TextInput.scss";
import CONST from "../../assets/js/constants";

function TextInput({ value, changeValue, className }) {
  const [isEdit, editToggle] = useState(false);
  const [curValue, changeCurValue] = useState(value);

  const successHandler = () => {
    changeValue(curValue);
    editToggle(false);
  };

  const cancelHandler = () => {
    changeCurValue(value);
    editToggle(false);
  };

  const inputKeyDownHandler = (evt) => {
    evt.stopPropagation();
    switch (evt.keyCode) {
      case CONST.ENTER_CODE:
        successHandler();
        break;
      case CONST.ESC_CODE:
        cancelHandler();
        break;
      default:
        break;
    }
  };

  return !isEdit ? (
    <p
      className={`input-text__text ${className}-text`}
      onClick={() => editToggle(true)}
    >
      {value}
    </p>
  ) : (
    <input
      type="text"
      name={className}
      className={`input-text__input ${className}`}
      value={curValue}
      onChange={(evt) => changeCurValue(evt.target.value)}
      onKeyDown={inputKeyDownHandler}
      id={className}
      onBlur={successHandler}
      autoFocus
    />
  );
}

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  changeValue: PropTypes.func.isRequired,
  className: PropTypes.string,
};

TextInput.defaultProps = {
  className: "",
};

export default TextInput;
